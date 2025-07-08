import NavItem from "./NavItem";
import { useState, useEffect } from "react";
import logo from "./assets/RoboIgnite.png";
import { Link } from "react-router-dom";

const Navbar = () => {
	const [isMobile, setIsMobile] = useState(false);
	const [isOpen, setIsOpen] = useState(false);

	useEffect(() => {
		const checkScreenSize = () => {
			setIsMobile(window.innerWidth <= 400);
		};
		checkScreenSize();

		window.addEventListener("resize", checkScreenSize);

		return () => window.removeEventListener("resize", checkScreenSize);
	}, []);

	useEffect(() => {
		console.log(isMobile ? "Mobile" : "Desktop");
	}, [isMobile]);

	useEffect(() => {
		console.log(isOpen);
	}, [isOpen]);

	return (
		<>
			{isMobile && (
				<button
					className="absolute z-50 w-full flex justify-start"
					onClick={() => {
						setIsOpen(!isOpen);
					}}
				>
					<span
						className={`absolute text-2xl text-zinc-700 m-2 transition-all duration-300 ease-in-out transform ${
							isOpen ? "opacity-0 scale-90" : "opacity-100 scale-100"
						}`}
					>
						🗙
					</span>

					{/* Close Icon */}
					<span
						className={`absolute text-2xl text-zinc-700 m-2 transition-all duration-300 ease-in-out transform ${
							isOpen ? "opacity-100 scale-100" : "opacity-0 scale-90"
						}`}
					>
						☰
					</span>
				</button>
			)}

			<nav
				className={`absolute flex bg-gray-700/20 backdrop-blur-sm gap-2 p-10  ${
					isMobile
						? "h-dvh w-[80%] flex-col justify-evenly items-start transition-transform duration-500 ease-in-out"
						: "w-full flex-row justify-evenly items-center transition-transform duration-300 ease-in-out"
				} ${isOpen ? "-translate-x-full" : "-translate-x-0"}`}
			>
				<Link to="/" className="">
					<img src={logo} alt="Event logo" className="w-20" />
				</Link>
				<NavItem text="About" path="/about" />
				<NavItem text="Gallery" path="/gallery" />
				<NavItem text="Events" path="/events" />
			</nav>
		</>
	);
};

export default Navbar;
