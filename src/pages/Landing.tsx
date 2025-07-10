import { useRef } from "react";
import { Typewriter } from "react-simple-typewriter";

import RobotCanvas from "../components/RobotCanvas";

const Landing = () => {
	const el = useRef(null);

	return (
		<div className="w-full flex flex-col md:flex-row items-center justify-center ">
			<div className="flex-1 w-full max-w-full">
				{/* <Canvas
					style={{
						width: "100%",
						height: "auto",
						aspectRatio: "1/1",
						maxWidth: "30rem",
						maxHeight: "30rem",
						zIndex: 0,
						margin: "0 auto",
					}}
					camera={{ position: [0, 1, 5], near: 0.1, far: 100 }}
					onPointerMissed={() => {
						// Reset interaction time when clicking outside
						lastInteractionTime.current = Date.now();
					}}
				>
					<ambientLight intensity={0.8} />
					<directionalLight position={[2, 2, 5]} intensity={1.2} castShadow />
					<Robot scale={3} />
					<OrbitControls
						enableZoom={false}
						enablePan={false}
						autoRotate={false}
					/>
				</Canvas> */}
				<div className="flex flex-col items-center justify-center">
					<RobotCanvas />
					<p className="font-courier text-green-300 -translate-y-10 animate-pulse">PS: click drag or hover </p>
				</div>
			</div>
			<div className="w-1/2 flex flex-col items-center justify-center  gap-10 ">
				<span ref={el} />
				<h1 className="font-courier text-white text-center  font-thin text-[2rem] md:text-6xl">
					<Typewriter
						words={["IEEE RAS SBC RIT", "presents"]}
						loop={false}
						cursor
						cursorStyle="|"
						typeSpeed={80}
						deleteSpeed={50}
						delaySpeed={1500}
					/>
				</h1>

				<img
					className=" mx-auto w-[18rem] md:w-[25rem]"
					src="RoboIgnite.png"
					alt=""
				/>
			</div>
		</div>
	);
};

export default Landing;
