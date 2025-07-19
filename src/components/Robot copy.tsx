// /// <reference types="vite/client" />
// // src/components/Robot.tsx
// import { useGLTF } from "@react-three/drei";
// import { useRef, useEffect } from "react";
// import { useFrame, useThree } from "@react-three/fiber";
// import * as THREE from "three";

// interface RobotProps {
// 	scale?: number;
// 	position?: [number, number, number];
// 	rotation?: [number, number, number];
// }

// const Robot: React.FC<RobotProps> = (props) => {
// 	const { scene } = useGLTF(import.meta.env.BASE_URL + "models/r1.glb");
// 	const robotRef = useRef<THREE.Group>(null);

// 	// Animation state
// 	const initialY = useRef<number | null>(null);
// 	const baseRotation = useRef({ x: 0, y: 0, z: 0 });
// 	const dragRotation = useRef({ x: 0, y: 0 });
// 	const isDragging = useRef(false);

// 	const lastDragTime = useRef(0);

// 	// Get Three.js state
// 	const { gl } = useThree();

// 	// Store original rotation when first mounted
// 	useEffect(() => {
// 		if (robotRef.current) {
// 			baseRotation.current = {
// 				x: robotRef.current.rotation.x,
// 				y: robotRef.current.rotation.y,
// 				z: robotRef.current.rotation.z,
// 			};
// 		}
// 	}, []);

// 	// Setup event handlers for drag rotation
// 	useEffect(() => {
// 		const canvas = gl.domElement;

// 		const onPointerDown = (e: PointerEvent) => {
// 			if (e.button !== 0) return; // Only left mouse button
// 			isDragging.current = true;
// 			lastDragTime.current = Date.now();
// 			canvas.style.cursor = "grabbing";
// 		};

// 		const onPointerUp = () => {
// 			isDragging.current = false;
// 			canvas.style.cursor = "grab";
// 		};

// 		const onPointerMove = (e: PointerEvent) => {
// 			if (!isDragging.current || !robotRef.current) return;

// 			// Update drag rotation based on mouse movement
// 			dragRotation.current.y -= e.movementX * 0.01;
// 			dragRotation.current.x -= e.movementY * 0.01;
// 			lastDragTime.current = Date.now();
// 		};

// 		canvas.addEventListener("pointerdown", onPointerDown);
// 		canvas.addEventListener("pointerup", onPointerUp);
// 		canvas.addEventListener("pointermove", onPointerMove);

// 		return () => {
// 			canvas.removeEventListener("pointerdown", onPointerDown);
// 			canvas.removeEventListener("pointerup", onPointerUp);
// 			canvas.removeEventListener("pointermove", onPointerMove);
// 		};
// 	}, [gl]);

// 	useFrame(() => {
// 		if (!robotRef.current) return;

// 		// Initialize position reference
// 		if (initialY.current === null) {
// 			initialY.current = robotRef.current.position.y;
// 		}

// 		// Bobbing animation
// 		const time = performance.now() / 1000;
// 		const bobHeight = 0.1;
// 		const floatingSpeed = 1.5;
// 		robotRef.current.position.y =
// 			initialY.current + Math.sin(time * floatingSpeed) * bobHeight;

// 		// Reset logic after user interaction
// 		const resetDelay = 2000; // 2 seconds
// 		const resetSpeed = 0.05;

// 		if (!isDragging.current && Date.now() - lastDragTime.current > resetDelay) {
// 			// Smoothly reset drag rotation
// 			dragRotation.current.x = THREE.MathUtils.lerp(
// 				dragRotation.current.x,
// 				0,
// 				resetSpeed
// 			);

// 			dragRotation.current.y = THREE.MathUtils.lerp(
// 				dragRotation.current.y,
// 				0,
// 				resetSpeed
// 			);

// 			// Continue with four-corner look animation
// 			const lookAmount = 0.25;
// 			const moveDuration = 0.75;
// 			const pauseDuration = 3;
// 			const phaseDuration = moveDuration + pauseDuration;
// 			const totalDuration = phaseDuration * 4;
// 			const t = time % totalDuration;

// 			const corners = [
// 				{ x: -lookAmount, y: -lookAmount },
// 				{ x: -lookAmount + 0.25, y: lookAmount + 0.5 },
// 				{ x: lookAmount, y: 0 },
// 				{ x: 0, y: 0 },
// 			];

// 			const phase = Math.floor(t / phaseDuration);
// 			const phaseT = t % phaseDuration;
// 			let targetX, targetY;

// 			if (phaseT < pauseDuration) {
// 				targetX = corners[phase].x;
// 				targetY = corners[phase].y;
// 			} else {
// 				const next = (phase + 1) % 4;
// 				const moveT = (phaseT - pauseDuration) / moveDuration;
// 				targetX =
// 					corners[phase].x + (corners[next].x - corners[phase].x) * moveT;
// 				targetY =
// 					corners[phase].y + (corners[next].y - corners[phase].y) * moveT;
// 			}

// 			// Apply smooth interpolation to four-corner target
// 			baseRotation.current.x += (targetX - baseRotation.current.x) * 0.05;
// 			baseRotation.current.y += (targetY - baseRotation.current.y) * 0.05;
// 		}

// 		// Apply both base rotation and drag rotation
// 		robotRef.current.rotation.x =
// 			baseRotation.current.x - dragRotation.current.x;
// 		robotRef.current.rotation.y =
// 			baseRotation.current.y - dragRotation.current.y;
// 	});

// 	return <primitive ref={robotRef} object={scene} {...props} />;
// };

// export default Robot;

/// <reference types="vite/types/importMeta.d.ts" />

import { useGLTF, useAnimations } from "@react-three/drei";
import { useRef, useEffect, useState } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

interface RobotProps {
	scale?: number;
	position?: [number, number, number];
	rotation?: [number, number, number];
}

const Robot: React.FC<RobotProps> = (props) => {
	const groupRef = useRef<THREE.Group>(null);
	const modelRef = useRef<THREE.Group>(null);

	// Load model + animations
	const { scene, animations } = useGLTF(
		import.meta.env.BASE_URL + "models/r1.glb"
	);
	const { actions } = useAnimations(animations, modelRef);

	// Center the model within the group
	const [modelCentered, setModelCentered] = useState(false);
	useEffect(() => {
		if (modelRef.current && !modelCentered) {
			const box = new THREE.Box3().setFromObject(modelRef.current);
			const center = new THREE.Vector3();
			box.getCenter(center);
			modelRef.current.position.sub(center);
			setModelCentered(true);
		}
	}, [scene, modelCentered]);

	// Play animation
	useEffect(() => {
		if (actions && Object.keys(actions).length > 0) {
			const action = actions[Object.keys(actions)[0]];
			action?.reset().fadeIn(0.5).play();
		}
	}, [actions]);

	// Rotation logic
	const baseRotation = useRef({ x: 0, y: 0 });
	const dragRotation = useRef({ x: 0, y: 0 });
	const targetRotation = useRef({ x: 0, y: 0 });
	const isDragging = useRef(false);
	const isHovering = useRef(false);
	const lastInteractionTime = useRef(0);
	const lastPosition = useRef({ x: 0, y: 0 });
	const mousePosition = useRef({ x: 0, y: 0 });
	const hoverTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

	const { gl } = useThree();

	// Mouse events with global tracking
	useEffect(() => {
		const handlePointerDown = (e: PointerEvent) => {
			if (e.button !== 0) return;
			isDragging.current = true;
			lastInteractionTime.current = Date.now();
			lastPosition.current = { x: e.clientX, y: e.clientY };
			gl.domElement.style.cursor = "grabbing";
		};

		const handlePointerUp = () => {
			isDragging.current = false;
			gl.domElement.style.cursor = "grab";
		};

		const handlePointerMove = (e: PointerEvent) => {
			// Update mouse position
			lastPosition.current = { x: e.clientX, y: e.clientY };

			// Convert to normalized device coordinates (-1 to 1)
			const rect = gl.domElement.getBoundingClientRect();
			mousePosition.current.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
			mousePosition.current.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;

			// Set hover state
			isHovering.current = true;
			lastInteractionTime.current = Date.now();

			// Clear any existing timeout
			if (hoverTimeout.current) {
				clearTimeout(hoverTimeout.current);
			}

			// Set timeout to clear hover state after 500ms of no movement
			hoverTimeout.current = setTimeout(() => {
				isHovering.current = false;
			}, 500);

			// Handle dragging rotation
			if (isDragging.current && groupRef.current) {
				const deltaX = e.clientX - lastPosition.current.x;
				const deltaY = e.clientY - lastPosition.current.y;
				dragRotation.current.y -= deltaX * 0.01;
				dragRotation.current.x -= deltaY * 0.01;
				lastPosition.current = { x: e.clientX, y: e.clientY };
			}
		};

		// Add global event listeners
		gl.domElement.addEventListener("pointerdown", handlePointerDown);
		window.addEventListener("pointerup", handlePointerUp);
		window.addEventListener("pointermove", handlePointerMove);

		return () => {
			gl.domElement.removeEventListener("pointerdown", handlePointerDown);
			window.removeEventListener("pointerup", handlePointerUp);
			window.removeEventListener("pointermove", handlePointerMove);
			if (hoverTimeout.current) {
				clearTimeout(hoverTimeout.current);
			}
		};
	}, [gl]);

	// Per-frame updates for rotation
	useFrame(() => {
		if (!groupRef.current) return;

		const resetDelay = 2000;
		const resetSpeed = 0.05;
		const now = Date.now();

		// Calculate target rotation when hovering (not dragging)
		if (isHovering.current && !isDragging.current) {
			// Calculate target rotation based on mouse position
			const lookSensitivity = 0.25;
			targetRotation.current.y =
				(mousePosition.current.x % 10) * lookSensitivity;
			targetRotation.current.x =
				(-mousePosition.current.y % 10) * lookSensitivity;
		}

		// Reset + auto-rotation when idle
		if (
			!isDragging.current &&
			!isHovering.current &&
			now - lastInteractionTime.current > resetDelay
		) {
			// Reset drag rotation
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

			// Auto-rotation pattern
			const time = performance.now() / 1000;
			const lookAmount = 0.25;
			const moveDuration = 0.75;
			const pauseDuration = 3;
			const phaseDuration = moveDuration + pauseDuration;
			const totalDuration = phaseDuration * 4;
			const t = time % totalDuration;

			const corners = [
				{ x: -lookAmount, y: -lookAmount },
				{ x: -lookAmount, y: lookAmount },
				{ x: lookAmount, y: lookAmount },
				{ x: lookAmount, y: -lookAmount },
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
				targetX = THREE.MathUtils.lerp(
					corners[phase].x,
					corners[next].x,
					moveT
				);
				targetY = THREE.MathUtils.lerp(
					corners[phase].y,
					corners[next].y,
					moveT
				);
			}

			targetRotation.current.x = targetX;
			targetRotation.current.y = targetY;
		}

		// Smoothly interpolate base rotation towards target
		const rotationSpeed = isHovering.current ? 0.2 : 0.05;
		baseRotation.current.x = THREE.MathUtils.lerp(
			baseRotation.current.x,
			targetRotation.current.x,
			rotationSpeed
		);
		baseRotation.current.y = THREE.MathUtils.lerp(
			baseRotation.current.y,
			targetRotation.current.y,
			rotationSpeed
		);

		// Apply rotation to the group
		groupRef.current.rotation.x =
			baseRotation.current.x - dragRotation.current.x;
		groupRef.current.rotation.y =
			baseRotation.current.y - dragRotation.current.y;
	});

	return (
		<group ref={groupRef} {...props}>
			<primitive ref={modelRef} object={scene} />
		</group>
	);
};

export default Robot;
