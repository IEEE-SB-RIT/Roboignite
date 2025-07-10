import { useRef } from "react";
import { Typewriter } from "react-simple-typewriter";
import { motion } from "motion/react";
import RobotCanvas from "../components/RobotCanvas";

const Landing = () => {
	const el = useRef(null);

	return (
		<div className="w-full my-5 flex flex-col md:flex-row items-center justify-center ">
			<div className="flex-1 w-full max-w-full">
				<div className="flex flex-col items-center justify-center">
					<RobotCanvas />
					<p className="font-quicksand text-green-300 -translate-y-10 animate-pulse">
						PS: click drag or hover
					</p>
				</div>
			</div>
			<div className="w-full gap-8 md:w-1/2 flex flex-col items-center justify-start ">
				<span ref={el} />
				<h1 className="font-courier text-white text-center font-thin text-[2rem] md:text-6xl">
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
					className="bg-[url('/logoBg.jpg')] bg-cover bg-no-repeat bg-center backdrop-blur-2xl mx-auto w-[18rem] md:w-[30rem] mt-10 shadow-[10px_10px_20px_1px_rgba(0,0,0,0.5)] shadow-black border-b-8 border-r-8 border-black/60  rounded-3xl py-5 px-10"
					src={import.meta.env.BASE_URL + "RoboIgnite.png"}
					alt="RoboIgnite Logo"
				/>
			</div>
		</div>
	);
};

export default Landing;
