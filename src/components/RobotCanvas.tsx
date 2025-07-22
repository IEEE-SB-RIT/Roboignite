import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import Robot from "./Robot";

const RobotCanvas = () => {
  return (
    <div style={{
      width: "100%",
      height: "100%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    }}>
      <style>{`
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
        @media (width <= 640px) {
          .robot-canvas {
            min-width: 22rem;
            max-width: 95vw;
          }
        }
      `}</style>
      
      <Canvas
        className="robot-canvas"
        camera={{ position: [0, 1, 3], near: 0.1, far: 100 }}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[2, 2, 5]} intensity={1.2} castShadow />
          <Robot scale={4} />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default RobotCanvas;