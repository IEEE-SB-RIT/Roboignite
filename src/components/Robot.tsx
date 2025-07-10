// Robot.jsx
// src/components/Robot.tsx
import { useGLTF } from "@react-three/drei";
import { useRef, useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

interface RobotProps {
	scale?: number;
	position?: [number, number, number];
	rotation?: [number, number, number];
}

const Robot: React.FC<RobotProps> = (props) => {
	const { scene } = useGLTF("/models/robot.glb");
	const robotRef = useRef<THREE.Group>(null);

	// Animation state
	const initialY = useRef<number | null>(null);
	const mousePos = useRef<{ x: number; y: number }>({ x: 0, y: 0 });

	// Track mouse position globally
	useEffect(() => {
		const handleMouseMove = (e: MouseEvent) => {
			mousePos.current = {
				x: (e.clientX / window.innerWidth) * 2 - 1,
				y: -(e.clientY / window.innerHeight) * 2 + 1,
			};
		};

		window.addEventListener("mousemove", handleMouseMove);
		return () => window.removeEventListener("mousemove", handleMouseMove);
	}, []);

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

		// Mouse tracking (always active)
		const targetX = (mousePos.current.y * Math.PI) / 16;
		const targetY = (mousePos.current.x * Math.PI) / 8;
		robotRef.current.rotation.x +=
			(targetX - robotRef.current.rotation.x) * 0.05;
		robotRef.current.rotation.y +=
			(targetY - robotRef.current.rotation.y) * 0.1;
	});

	return <primitive ref={robotRef} object={scene} {...props} />;
};

export default Robot;
