import { useRef } from "react";
import { Typewriter } from "react-simple-typewriter";

const Landing = () => {
	const el = useRef(null);

	return (
		<>
			<div className="bg-gradient-to-tl from-gray-900 to-gray-600  h-dvh flex flex-col items-center justify-center p-3 gap-10 ">
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
					src="/src/assets/RoboIgnite.png"
					alt=""
				/>
			</div>
		</>
	);
};

export default Landing;
