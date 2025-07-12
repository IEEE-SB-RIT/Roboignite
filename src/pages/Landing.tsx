import { useRef } from "react";
import { Typewriter } from "react-simple-typewriter";
import { motion } from "motion/react";
import RobotCanvas from "../components/RobotCanvas";
import SpaceBg from "../components/spaceBg";

const Landing = () => {
	const el = useRef(null);

	return (
		<div className="w-full h-full my-5 flex flex-col md:flex-row items-center justify-center ">
			<div className="absolute z-0 h-screen w-full">
				<SpaceBg
					text=""
					className="absolute inset-0 h-full w-full"
					starCount={500}
					speed={1}
				/>
			</div>
			<div className="">
				<div className="min-w-1/3 flex flex-col items-center justify-center">
					<RobotCanvas />

					<p className="font-courier text-xs m-5 text-white animate-bounce">
						ℹ️ Try Hovering/clicking!
					</p>
				</div>
			</div>
			<div className="w-full m-5gap-8 md:w-1/2 flex flex-col items-center justify-start ">
				<span ref={el} />
				<div className="z-1">
					<h1 className=" bg-black rounded-2xl w-80 md:w-[38rem] p-4 border-2 inset-shadow-sm inset-shadow-white font-courier text-white text-center font-thin text-[1.5rem] md:text-5xl">
						<span className="text-green-600 font-bold font-courier">./</span>
						<Typewriter
							words={["IEEE RAS SBC RIT", "presents"]}
							loop={false}
							cursor
							cursorStyle="_"
							cursorBlinking
							cursorColor="#00ff00"
							typeSpeed={50}
							deleteSpeed={70}
							delaySpeed={1500}
						/>
					</h1>
				</div>

				<motion.img
					initial={{ y: 10 }}
					animate={{ y: 0 }}
					exit={{ y: 10 }}
					transition={{
						duration: 2,
						repeat: Infinity,
						repeatType: "reverse",
						damping: 10,
					}}
					className="bg-[url('/logoBg.jpg')] inset-shadow-sm inset-shadow-indigo-400 bg-cover bg-no-repeat bg-center backdrop-blur-2xl mx-auto w-[18rem] md:w-[30rem] mt-10 shadow-[5px_5px_30px_0.1px_rgba(0,0,0,0.5)] shadow-white/20 border-b-8 border-r-8 border-black/60  rounded-3xl py-5 px-10"
					src={import.meta.env.BASE_URL + "RoboIgnite.png"}
					alt="RoboIgnite Logo"
				/>
			</div>
		</div>
	);
};

export default Landing;
