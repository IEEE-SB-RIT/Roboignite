/// <reference types="vite/types/importMeta.d.ts" />

import { useGLTF, useAnimations } from "@react-three/drei";
import { useRef, useEffect, useMemo } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

interface RobotProps {
	scale?: number;
	position?: [number, number, number];
	rotation?: [number, number, number];
}

const Robot: React.FC<RobotProps> = (props) => {
	// Moved inside component and fixed typo
	const AUTO_ROTATION_CORNERS = useMemo(
		() => [
			{ x: -0.25, y: -0.25 },
			{ x: -0.25, y: 0.25 },
			{ x: 0.25, y: 0.25 },
			{ x: 0.25, y: -0.25 },
		],
		[]
	);

	const groupRef = useRef<THREE.Group>(null);
	const modelRef = useRef<THREE.Group>(null);

	// Static objects for bounding box
	const bbox = useRef(new THREE.Box3());
	const center = useRef(new THREE.Vector3());

	// Load model + animations
	const { scene, animations } = useGLTF(
		`${import.meta.env.BASE_URL}roboModels/r1.glb`
	);

	const { actions } = useAnimations(animations, modelRef);

	// Center the model
	useEffect(() => {
		if (!modelRef.current) return;

		bbox.current.setFromObject(modelRef.current);
		bbox.current.getCenter(center.current);
		modelRef.current.position.sub(center.current);
	}, [scene]);

	// Play animation
	useEffect(() => {
		if (!actions) return;

		const actionNames = Object.keys(actions);
		if (actionNames.length === 0) return;

		const action = actions[actionNames[0]];
		action?.reset().fadeIn(0.5).play();

		return () => {
			action?.fadeOut(0.5);
		};
	}, [actions]);

	// Rotation system
	const baseRotation = useRef({ x: 0, y: 0 });
	const dragRotation = useRef({ x: 0, y: 0 });
	const targetRotation = useRef({ x: 0, y: 0 });
	const isDragging = useRef(false);
	const isHovering = useRef(false);
	const lastInteractionTime = useRef(Date.now());
	const lastPosition = useRef({ x: 0, y: 0 });
	const mousePosition = useRef({ x: 0, y: 0 });
	const hoverTimeout = useRef<any | null>(null);

	const { gl } = useThree();

	// Mouse events
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
			const rect = gl.domElement.getBoundingClientRect();
			mousePosition.current.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
			mousePosition.current.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;

			// Update hover state
			isHovering.current = true;
			lastInteractionTime.current = Date.now();

			// Handle dragging
			if (isDragging.current) {
				const deltaX = e.clientX - lastPosition.current.x;
				const deltaY = e.clientY - lastPosition.current.y;
				dragRotation.current.y -= deltaX * 0.01;
				dragRotation.current.x -= deltaY * 0.01;
			}
			lastPosition.current = { x: e.clientX, y: e.clientY };

			// Clear existing timeout
			if (hoverTimeout.current) clearTimeout(hoverTimeout.current);

			// Set new timeout
			hoverTimeout.current = setTimeout(() => {
				isHovering.current = false;
			}, 500);
		};

		// Add event listeners
		const canvas = gl.domElement;
		canvas.addEventListener("pointerdown", handlePointerDown);
		window.addEventListener("pointerup", handlePointerUp);
		window.addEventListener("pointermove", handlePointerMove);

		return () => {
			canvas.removeEventListener("pointerdown", handlePointerDown);
			window.removeEventListener("pointerup", handlePointerUp);
			window.removeEventListener("pointermove", handlePointerMove);
			if (hoverTimeout.current) clearTimeout(hoverTimeout.current);
		};
	}, [gl]);

	// Frame updates
	useFrame(() => {
		if (!groupRef.current) return;

		const now = Date.now();
		const idleTime = now - lastInteractionTime.current;
		const resetDelay = 2000;
		const resetSpeed = 0.05;

		// Hover behavior
		if (isHovering.current && !isDragging.current) {
			targetRotation.current.y = mousePosition.current.x * 0.25;
			targetRotation.current.x = -mousePosition.current.y * 0.25;
		}

		// Auto-rotation when idle
		if (!isDragging.current && !isHovering.current && idleTime > resetDelay) {
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

			// Calculate auto-rotation
			const timeInSeconds = now / 1000; // Convert to seconds
			const moveDuration = 0.75;
			const pauseDuration = 3;
			const phaseDuration = moveDuration + pauseDuration;
			const totalDuration = phaseDuration * 4;
			const t = timeInSeconds % totalDuration;

			const phase = Math.floor(t / phaseDuration);
			const phaseT = t % phaseDuration;

			const { x: targetX, y: targetY } = (() => {
				if (phaseT < pauseDuration) {
					return AUTO_ROTATION_CORNERS[phase];
				} else {
					const next = (phase + 1) % 4;
					const moveT = (phaseT - pauseDuration) / moveDuration;
					return {
						x: THREE.MathUtils.lerp(
							AUTO_ROTATION_CORNERS[phase].x,
							AUTO_ROTATION_CORNERS[next].x,
							moveT
						),
						y: THREE.MathUtils.lerp(
							AUTO_ROTATION_CORNERS[phase].y,
							AUTO_ROTATION_CORNERS[next].y,
							moveT
						),
					};
				}
			})();

			targetRotation.current.x = targetX;
			targetRotation.current.y = targetY;
		}

		// Apply rotation smoothing
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

		// Apply final rotation
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
