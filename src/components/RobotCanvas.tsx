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
		<div
			style={{
				width: "100%",
				height: "100%",
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
			}}
		>
			<style>
				{`
					.robot-canvas {
						width: 100%;
						height: 100%;
						aspect-ratio: 1 / 1;
						min-width: 25rem;
						max-width: 100vw;
						z-index: 0;
						margin: 0 auto;
						cursor: grab;
					}
					@media (width<= 640px) {
						.robot-canvas {
							min-width: 22rem;
							max-width: 95vw;
						}
					}
			
					}
				`}
			</style>
			<Canvas
				className="robot-canvas"
				camera={{ position: [0, 1, 3], near: 0.1, far: 100 }}
				onPointerDown={handleInteractionStart}
				onPointerUp={handleInteractionEnd}
			>
				<ambientLight intensity={0.5} />
				<directionalLight position={[2, 2, 5]} intensity={1.2} castShadow />
				<Robot scale={4} />
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
