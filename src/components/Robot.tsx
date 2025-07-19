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
	const touchId = useRef<number | null>(null); // Track active touch point

	const { gl } = useThree();

	// Unified input handling (mouse + touch)
	useEffect(() => {
		const handlePointerDown = (e: PointerEvent) => {
			if (e.button !== 0) return;
			isDragging.current = true;
			lastInteractionTime.current = Date.now();
			lastPosition.current = { x: e.clientX, y: e.clientY };
			gl.domElement.style.cursor = "grabbing";
		};

		const handleTouchStart = (e: TouchEvent) => {
			// Use only first touch point
			if (touchId.current !== null || e.touches.length !== 1) return;
			touchId.current = e.touches[0].identifier;
			isDragging.current = true;
			lastInteractionTime.current = Date.now();
			lastPosition.current = {
				x: e.touches[0].clientX,
				y: e.touches[0].clientY,
			};
			isHovering.current = true;
		};

		const handlePointerUp = () => {
			isDragging.current = false;
			gl.domElement.style.cursor = "grab";
		};

		const handleTouchEnd = () => {
			if (touchId.current !== null) {
				touchId.current = null;
				isDragging.current = false;
				// Set hover state and schedule clearing
				lastInteractionTime.current = Date.now();
				if (hoverTimeout.current) clearTimeout(hoverTimeout.current);
				hoverTimeout.current = setTimeout(() => {
					isHovering.current = false;
				}, 500);
			}
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

		const handleTouchMove = (e: TouchEvent) => {
			// Find our tracked touch point
			if (touchId.current === null) return;
			let touch;
			for (let i = 0; i < e.touches.length; i++) {
				if (e.touches[i].identifier === touchId.current) {
					touch = e.touches[i];
					break;
				}
			}
			if (!touch) return;

			e.preventDefault(); // Prevent scrolling

			// Update touch position
			lastPosition.current = { x: touch.clientX, y: touch.clientY };

			// Convert to normalized device coordinates
			const rect = gl.domElement.getBoundingClientRect();
			mousePosition.current.x =
				((touch.clientX - rect.left) / rect.width) * 2 - 1;
			mousePosition.current.y =
				-((touch.clientY - rect.top) / rect.height) * 2 + 1;

			// Maintain hover state during touch
			isHovering.current = true;
			lastInteractionTime.current = Date.now();

			// Handle dragging rotation
			if (isDragging.current && groupRef.current) {
				const deltaX = touch.clientX - lastPosition.current.x;
				const deltaY = touch.clientY - lastPosition.current.y;
				dragRotation.current.y -= deltaX * 0.01;
				dragRotation.current.x -= deltaY * 0.01;
				lastPosition.current = { x: touch.clientX, y: touch.clientY };
			}
		};

		// Add event listeners
		gl.domElement.addEventListener("pointerdown", handlePointerDown);
		gl.domElement.addEventListener("touchstart", handleTouchStart, {
			passive: false,
		});
		window.addEventListener("pointerup", handlePointerUp);
		window.addEventListener("touchend", handleTouchEnd);
		window.addEventListener("pointermove", handlePointerMove);
		window.addEventListener("touchmove", handleTouchMove, { passive: false });

		return () => {
			gl.domElement.removeEventListener("pointerdown", handlePointerDown);
			gl.domElement.removeEventListener("touchstart", handleTouchStart);
			window.removeEventListener("pointerup", handlePointerUp);
			window.removeEventListener("touchend", handleTouchEnd);
			window.removeEventListener("pointermove", handlePointerMove);
			window.removeEventListener("touchmove", handleTouchMove);
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
