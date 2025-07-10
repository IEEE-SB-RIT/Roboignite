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
	const { scene } = useGLTF("models/robot.glb");
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

		// Four-corner look with pause at each corner
		const lookAmount = 0.25; // radians
		const moveDuration = 0.75; // seconds to move between corners
		const pauseDuration = 3; // seconds to pause at each corner
		const phaseDuration = moveDuration + pauseDuration;
		const totalDuration = phaseDuration * 4; // 4 corners
		const t = time % totalDuration;

		// Define the four corners
		const corners = [
			{ x: -lookAmount, y: -lookAmount }, // top-left
			{ x: -lookAmount, y: lookAmount }, // top-right
			{ x: lookAmount, y: lookAmount }, // bottom-right
			{ x: lookAmount, y: -lookAmount }, // bottom-left
		];

		// Figure out which phase we're in
		const phase = Math.floor(t / phaseDuration);
		const phaseT = t % phaseDuration;
		let targetX, targetY;
		if (phaseT < pauseDuration) {
			// Pause at the current corner
			targetX = corners[phase].x;
			targetY = corners[phase].y;
		} else {
			// Move to the next corner
			const next = (phase + 1) % 4;
			const moveT = (phaseT - pauseDuration) / moveDuration;
			targetX = corners[phase].x + (corners[next].x - corners[phase].x) * moveT;
			targetY = corners[phase].y + (corners[next].y - corners[phase].y) * moveT;
		}
		robotRef.current.rotation.x +=
			(targetX - robotRef.current.rotation.x) * 0.05;
		robotRef.current.rotation.y +=
			(targetY - robotRef.current.rotation.y) * 0.05;
	});

	return <primitive ref={robotRef} object={scene} {...props} />;
};

export default Robot;
