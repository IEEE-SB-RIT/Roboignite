import { useState, useEffect, useCallback, useRef } from "react";
import NavItem from "../datas/NavItem.tsx";
import logo from "/RoboIgnite.png";
import { Link } from "react-router-dom";

const Navbar = () => {
	const [isMobile, setIsMobile] = useState(false);
	const [isOpen, setIsOpen] = useState(false);
	const initialized = useRef(false);

	const closeMenu = useCallback(() => {
		setIsOpen(false);
	}, []);

	useEffect(() => {
		if (isMobile && isOpen) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "unset";
		}

		return () => {
			document.body.style.overflow = "unset";
		};
	}, [isMobile, isOpen]);

	useEffect(() => {
		if (!initialized.current) {
			setIsMobile(window.innerWidth <= 640);
			initialized.current = true;
		}

		const checkScreenSize = () => {
			setIsMobile(window.innerWidth <= 640);
			if (window.innerWidth > 640) closeMenu();
		};

		window.addEventListener("resize", checkScreenSize);
		return () => window.removeEventListener("resize", checkScreenSize);
	}, [closeMenu]);

	return (
		<>
			{isMobile && (
				<button
					className="fixed z-[60]" // Fixed position with higher z-index
					onClick={() => setIsOpen(!isOpen)}
					aria-label={isOpen ? "Close menu" : "Open menu"}
				>
					<span
						className={` mx-4 my-2  block text-3xl text-zinc-500 transition-opacity duration-300 ease-in-out ${
							isOpen ? "opacity-0 scale-90" : "opacity-100 scale-100"
						}`}
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="36"
							height="36"
							viewBox="0 0 24 24"
						>
							<path
								fill="none"
								stroke="currentColor"
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M4 6h16M4 12h16M4 18h7"
							/>
						</svg>
					</span>
					<span
						className={`absolute top-0 left-0 mx-2 text-3xl text-zinc-500 transition-all duration-300 ease-in-out ${
							isOpen ? "opacity-100 scale-90" : "opacity-0 scale-100"
						}`}
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="48"
							height="48"
							viewBox="0 0 24 24"
						>
							<path
								fill="currentColor"
								d="m12 13.4l-4.9 4.9q-.275.275-.7.275t-.7-.275t-.275-.7t.275-.7l4.9-4.9l-4.9-4.9q-.275-.275-.275-.7t.275-.7t.7-.275t.7.275l4.9 4.9l4.9-4.9q.275-.275.7-.275t.7.275t.275.7t-.275.7L13.4 12l4.9 4.9q.275.275.275.7t-.275.7t-.7.275t-.7-.275z"
							/>
						</svg>
					</span>
				</button>
			)}

			<nav
				className={`absolute top-0 z-50 flex bg-gradient-to-b from-black to-transparent backdrop-blur-xs ${
					isMobile
						? `absolute h-full w-[80%] flex-col justify-between items-start transition-transform duration-300 ease-in-out ${
								isOpen ? "translate-x-0" : "-translate-x-full"
						  }`
						: "sticky h-32 w-full flex-row justify-between items-center"
				}`}
			>
				{/* <Link
					to="/"
					className="max-sm:translate-y-20"
					onClick={isMobile ? closeMenu : undefined}
				>
					<img src={logo} alt="Event logo" className="w-40 ml-10" />
				</Link> */}
				<div className="w-full h-full flex flex-col sm:flex-row items-start sm:items-center justify-center sm:justify-end md:flex-row p-5 gap-10">
					<NavItem
						text="Home"
						path="/"
						onClick={closeMenu}
						isMobile={isMobile}
					/>

					<NavItem
						text="About"
						path="/about"
						onClick={closeMenu}
						isMobile={isMobile}
					/>
					<NavItem
						text="Gallery"
						path="/gallery"
						onClick={closeMenu}
						isMobile={isMobile}
					/>
					<NavItem
						text="Events"
						path="/events"
						onClick={closeMenu}
						isMobile={isMobile}
					/>
				</div>
			</nav>
		</>
	);
};

export default Navbar;
