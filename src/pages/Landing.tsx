    import {useEffect, useRef, useState} from "react";
    import {Typewriter} from "react-simple-typewriter";
    import RobotCanvas from "../components/RobotCanvas";
    import GradientBackground from "../components/gradientBg";
    import Button from "../components/Button.tsx";

    const Landing = () => {
        const el = useRef(null);
        const [showModal, setShowModal] = useState(false);
        useEffect(() => {
            const modalShown = sessionStorage.getItem("showModal");

            if (!modalShown) {
                // This useEffect handles the modal's appearance and disappearance.
                // It runs only once when the component mounts.
                const showModalTimer = setTimeout(() => {
                    setShowModal(true);
                    sessionStorage.setItem("showModal", "true");
                }, 0); // Shows the modal after 3 seconds

                const hideModalTimer = setTimeout(() => {
                    setShowModal(false);
                }, 5000);

                return () => {
                    clearTimeout(showModalTimer);
                    clearTimeout(hideModalTimer);
                };
            }
        }, []);
        useEffect(() => {
            //for disabling scroll when preview is present
            if (showModal) {
                document.body.style.overflow = "hidden";
            } else {
                document.body.style.overflow = "auto";
            }

            return () => {
                document.body.style.overflow = "auto";
            };
        }, [showModal]);
        useEffect(() => {
            const handleEsc = (e: KeyboardEvent) => {
                if (e.key === "Escape" && showModal) {
                    setShowModal(false);
                }
            };
            window.addEventListener("keydown", handleEsc);
            return () => window.removeEventListener("keydown", handleEsc);
        }, [showModal]);
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
                    <div className="mt-6 z-[50]">
                        <Button text={"Grab Your Tickets!"} isNavigate={false} link={"https://www.yepdesk.com/roboignite"}/>
                    </div>
                </div>
                {showModal && (
                    <div
                        className="fixed inset-0 z-50 flex items-center justify-center transition-opacity backdrop-blur-sm duration-500 ease-in-out px-4"
                        onClick={() => setShowModal(false)}
                    >
                        <div
                            className="relative bg-white/20 backdrop-blur-2xl rounded-2xl shadow-lg
                                 w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg
                                 mx-4 sm:mx-6 md:mx-8
                                 p-4 sm:p-6 md:p-8
                                 text-center animate-scaleIn border-2 border-white/50
                                 min-h-[200px] sm:min-h-[220px] md:min-h-[240px]
                                 flex flex-col justify-center gap-3 sm:gap-4 md:gap-6"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button
                                className="absolute top-2 right-2 sm:top-3 sm:right-3 md:top-4 md:right-4
                                     text-white text-2xl sm:text-3xl md:text-4xl font-bold
                                     hover:text-red-500 cursor-pointer z-50
                                     transition-colors duration-200
                                     w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12
                                     flex items-center justify-center"
                                onClick={() => setShowModal(false)}
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="100%"
                                    height="100%"
                                    viewBox="0 0 24 24"
                                    className="w-6 h-6 sm:w-8 sm:h-8 md:w-9 md:h-9"
                                >
                                    <path
                                        fill="currentColor"
                                        d="m12 13.4l-4.9 4.9q-.275.275-.7.275t-.7-.275t-.275-.7t.275-.7l4.9-4.9l-4.9-4.9q-.275-.275-.275-.7t.275-.7t.7-.275t.7.275l4.9 4.9l4.9-4.9q.275-.275.7-.275t.7.275t.275.7t-.275.7L13.4 12l4.9 4.9q.275.275.275.7t-.275.7t-.7.275t-.7-.275z"
                                    />
                                </svg>
                            </button>

                            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl
                                     font-bold text-white tracking-wide drop-shadow-lg
                                     leading-tight px-2">
                                Early Bird Tickets Out Now!
                            </h2>

                            <p className="text-gray-200 text-xs sm:text-sm md:text-base lg:text-lg
                                    px-2 leading-relaxed">
                                Get your tickets before they are gone!
                            </p>

                            <div className="mt-2 sm:mt-3 md:mt-4">
                                <Button text={"Get Tickets"} isNavigate={false} link={"https://www.yepdesk.com/roboignite"}/>
                            </div>
                        </div>
                    </div>
                )}

            </div>
        );
    };

    export default Landing;
