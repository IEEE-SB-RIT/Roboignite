import { useEffect, useState } from "react";
import { Typewriter } from "react-simple-typewriter";
import RobotCanvas from "../components/RobotCanvas";
import GradientBackground from "../components/gradientBg";
import Button from "../components/Button.tsx";
import EarlyBirdModal from "../components/EarlyBirdModal";

const Landing = () => {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const modalShown = sessionStorage.getItem("showModal");

    if (!modalShown) {
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
    // For disabling scroll when modal is open
    if (showModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showModal]);

  return (
    <div className="w-full flex-grow  my-5 flex flex-col md:flex-row items-center justify-center ">
      <div className="absolute z-0 h-full w-full">
        <GradientBackground />
      </div>
      <div className="">
        <div className="min-w-1/3 flex flex-col items-center justify-center">
          <RobotCanvas />

          <p className="font-courier text-xs m-5 text-zinc-400 animate-bounce">
            Hover/click around!
          </p>
        </div>
      </div>
      <div className="w-full  gap-8 md:w-1/2 flex flex-col items-center justify-start ">
        <span />
        <div className="z-10">
          <div className=" bg-black rounded-2xl w-80 lg:w-[30rem] p-4  border-2 inset-shadow-sm inset-shadow-white/80 font-courier text-white text-center font-thin text-[1.5rem] md:text-3xl lg:text-4xl">
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
          <Button
            text={"Grab Your Tickets!"}
            isNavigate={false}
            link={"https://www.yepdesk.com/roboignite"}
          />
        </div>
      </div>

      {/* Use the new modal component */}
      <EarlyBirdModal isOpen={showModal} onClose={() => setShowModal(false)} />
    </div>
  );
};

export default Landing;
