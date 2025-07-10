/// <reference types="vite/client" />
// src/components/Robot.tsx
import { useGLTF } from "@react-three/drei";
import { useRef, useEffect, useState } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

interface RobotProps {
  scale?: number;
  position?: [number, number, number];
  rotation?: [number, number, number];
}

const Robot: React.FC<RobotProps> = (props) => {
  const { scene } = useGLTF(import.meta.env.BASE_URL + "models/robot.glb");
  const robotRef = useRef<THREE.Group>(null);

  // Animation state
  const initialY = useRef<number | null>(null);
  const baseRotation = useRef({ x: 0, y: 0, z: 0 });
  const dragRotation = useRef({ x: 0, y: 0 });
  const isDragging = useRef(false);
  const resetProgress = useRef(0);
  const lastDragTime = useRef(0);
  
  // Get Three.js state
  const { gl } = useThree();
  
  // Store original rotation when first mounted
  useEffect(() => {
    if (robotRef.current) {
      baseRotation.current = {
        x: robotRef.current.rotation.x,
        y: robotRef.current.rotation.y,
        z: robotRef.current.rotation.z
      };
    }
  }, []);

  // Setup event handlers for drag rotation
  useEffect(() => {
    const canvas = gl.domElement;
    
    const onPointerDown = (e: PointerEvent) => {
      if (e.button !== 0) return; // Only left mouse button
      isDragging.current = true;
      lastDragTime.current = Date.now();
      canvas.style.cursor = "grabbing";
    };
    
    const onPointerUp = () => {
      isDragging.current = false;
      canvas.style.cursor = "grab";
    };
    
    const onPointerMove = (e: PointerEvent) => {
      if (!isDragging.current || !robotRef.current) return;
      
      // Update drag rotation based on mouse movement
      dragRotation.current.y -= e.movementX * 0.01;
      dragRotation.current.x -= e.movementY * 0.01;
      lastDragTime.current = Date.now();
    };
    
    canvas.addEventListener("pointerdown", onPointerDown);
    canvas.addEventListener("pointerup", onPointerUp);
    canvas.addEventListener("pointermove", onPointerMove);
    
    return () => {
      canvas.removeEventListener("pointerdown", onPointerDown);
      canvas.removeEventListener("pointerup", onPointerUp);
      canvas.removeEventListener("pointermove", onPointerMove);
    };
  }, [gl]);

  useFrame(() => {
    if (!robotRef.current) return;
    
    // Initialize position reference
    if (initialY.current === null) {
      initialY.current = robotRef.current.position.y;
    }
    
    // Bobbing animation
    const time = performance.now() / 1000;
    const bobHeight = 0.1;
    const floatingSpeed = 1.5;
    robotRef.current.position.y =
      initialY.current + Math.sin(time * floatingSpeed) * bobHeight;
    
    // Reset logic after user interaction
    const resetDelay = 2000; // 2 seconds
    const resetSpeed = 0.05;
    
    if (!isDragging.current && (Date.now() - lastDragTime.current > resetDelay)) {
      // Smoothly reset drag rotation
      dragRotation.current.x = THREE.MathUtils.lerp(
        dragRotation.current.x,
        0,
        resetSpeed
      );
      
      dragRotation.current.y = THREE.MathUtils.lerp(
        dragRotation.current.y,
        0,
        resetSpeed
      );
      
      // Continue with four-corner look animation
      const lookAmount = 0.25;
      const moveDuration = 0.75;
      const pauseDuration = 3;
      const phaseDuration = moveDuration + pauseDuration;
      const totalDuration = phaseDuration * 4;
      const t = time % totalDuration;
      
      const corners = [
        { x: -lookAmount, y: -lookAmount },
        { x: -lookAmount+0.25, y: lookAmount+0.5 },
        { x: lookAmount, y: 0 },
        { x: 0, y: 0 },
      ];
      
      const phase = Math.floor(t / phaseDuration);
      const phaseT = t % phaseDuration;
      let targetX, targetY;
      
      if (phaseT < pauseDuration) {
        targetX = corners[phase].x;
        targetY = corners[phase].y;
      } else {
        const next = (phase + 1) % 4;
        const moveT = (phaseT - pauseDuration) / moveDuration;
        targetX = corners[phase].x + (corners[next].x - corners[phase].x) * moveT;
        targetY = corners[phase].y + (corners[next].y - corners[phase].y) * moveT;
      }
      
      // Apply smooth interpolation to four-corner target
      baseRotation.current.x += (targetX - baseRotation.current.x) * 0.05;
      baseRotation.current.y += (targetY - baseRotation.current.y) * 0.05;
    }
    
    // Apply both base rotation and drag rotation
    robotRef.current.rotation.x = baseRotation.current.x - dragRotation.current.x;
    robotRef.current.rotation.y = baseRotation.current.y - dragRotation.current.y;
  });

  return <primitive ref={robotRef} object={scene} {...props} />;
};

export default Robot;