import {useEffect, useRef, useState} from "react";
import {Typewriter} from "react-simple-typewriter";
import RobotCanvas from "../components/RobotCanvas";
import GradientBackground from "../components/gradientBg";

const Landing = () => {
    const el = useRef(null);
    const [showModal, setShowModal] = useState(false);
    useEffect(() => {
        // This useEffect handles the modal's appearance and disappearance.
        // It runs only once when the component mounts.
        const showModalTimer = setTimeout(() => {
            setShowModal(true);
        }, 0); // Shows the modal after 3 seconds

        const hideModalTimer = setTimeout(() => {
            setShowModal(false);
        }, 5000);

        return () => {
            clearTimeout(showModalTimer);
            clearTimeout(hideModalTimer);
        };
    }, []);
    return (

        <div className="w-full flex-grow  my-5 flex flex-col md:flex-row items-center justify-center ">
            <div className="absolute z-0 h-full w-full">
                <GradientBackground/>
                {/* <SpaceBg
					text=""
					className="absolute inset-0 h-full w-full"
					starCount={500}
					speed={1}
				/> */}
            </div>
            <div className="">
                <div className="min-w-1/3 flex flex-col items-center justify-center">
                    <RobotCanvas/>

                    <p className="font-courier text-xs m-5 text-zinc-400 animate-bounce">
                        Hover/click around!
                    </p>
                </div>
            </div>
            <div className="w-full  gap-8 md:w-1/2 flex flex-col items-center justify-start ">
                <span ref={el}/>
                <div className="z-10">
                    <div
                        className=" bg-black rounded-2xl w-80 lg:w-[30rem] p-4  border-2 inset-shadow-sm inset-shadow-white/80 font-courier text-white text-center font-thin text-[1.5rem] md:text-3xl lg:text-4xl">
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
                    </div>
                </div>

                <img
                    className="bg-[url('/logoBg.webp')] animate-slowBobbing duration-1000 inset-shadow-sm inset-shadow-indigo-400 bg-cover bg-no-repeat bg-center  mx-auto w-[18rem] md:w-[30rem] my-5 shadow-[5px_15px_30px_0.1px_rgba(0,0,0,0.5)] shadow-violet-500/20 border-b-8 border-r-8 border-black  rounded-3xl py-5 px-10"
                    src={import.meta.env.BASE_URL + "RoboIgnite.webp"}
                    alt="RoboIgnite Logo"
                />
            </div>
            {showModal && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center transition-opacity duration-500 ease-in-out">
                    <div
                        className="bg-white/20 backdrop-blur-2xl rounded-2xl shadow-lg max-w-md w-full p-6 text-center animate-scaleIn border-2 border-white/50">
                        <h2 className="text-3xl font-bold text-white tracking-wide drop-shadow-lg">
                            Early Bird Tickets Out Now!
                        </h2>
                        <p className="text-gray-200 mt-4 text-lg">
                            Get your tickets before they are gone!
                        </p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Landing;
