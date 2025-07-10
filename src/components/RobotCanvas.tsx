// src/components/RobotCanvas.tsx
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Robot from "./Robot";
import { useRef } from "react";
import type { FC } from "react";

const RobotCanvas: FC = () => {
	const resetTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);
	const orbitControlsRef = useRef<any>(null);

	const handleInteractionStart = () => {
		if (resetTimeout.current) {
			clearTimeout(resetTimeout.current);
			resetTimeout.current = null;
		}
	};

	const handleInteractionEnd = () => {
		resetTimeout.current = setTimeout(() => {
			if (orbitControlsRef.current) {
				orbitControlsRef.current.reset();
			}
		}, 2000);
	};

	return (
		<div className="flex-1 w-full max-w-full relative">
			<Canvas
				style={{
					width: "100%",
					height: "auto",
					aspectRatio: "1/1",
					maxWidth: "32rem",
					maxHeight: "32rem",
					zIndex: 0,
					margin: "0 auto",
					cursor: "grab",
				}}
				camera={{ position: [0, 1, 5], near: 0.1, far: 100 }}
				onPointerDown={handleInteractionStart}
				onPointerUp={handleInteractionEnd}
			>
				<ambientLight intensity={0.8} />
				<directionalLight position={[2, 2, 5]} intensity={1.2} castShadow />
				<Robot scale={3} />
				<OrbitControls
					enableRotate={false}
					enableZoom={false}
					enablePan={false}
					autoRotate={false}
					ref={orbitControlsRef}
				/>
			</Canvas>
		</div>
	);
};

export default RobotCanvas;
