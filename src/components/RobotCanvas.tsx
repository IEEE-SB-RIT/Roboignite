import { Canvas } from "@react-three/fiber";
import Robot from "./Robot";

const RobotCanvas = () => {
  return (
    <>
      <Canvas
        className="robot-canvas"
        camera={{ position: [0, 0, 1], near: 0.1, far: 10 }}
      >
        <ambientLight intensity={0.5} />
        <directionalLight position={[0, 0, 10]} intensity={1.2} />
        <Robot scale={1.25} />
      </Canvas>
    </>
  );
};

export default RobotCanvas;
