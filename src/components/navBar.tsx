import { useState, useEffect, useCallback, useRef } from "react";
import NavItem from "../datas/NavItem.tsx";
import logo from "/RoboIgnite.png";
import { Link } from "react-router-dom";

const Navbar = () => {
	const [isMobile, setIsMobile] = useState(false);
	const [isOpen, setIsOpen] = useState(false);
	const initialized = useRef(false); // Track initialization

	// Close menu function
	const closeMenu = useCallback(() => {
		setIsOpen(false);
	}, []);

	// Lock body scroll when mobile menu is open
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

	// Check screen size
	useEffect(() => {
		if (!initialized.current) {
			// Set initial state before first render
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
					className="fixed z-[10001] p-4" // Increased to 10001
					onClick={() => setIsOpen(!isOpen)}
					aria-label={isOpen ? "Close menu" : "Open menu"}
				>
					<span
						className={`text-3xl font-bold text-zinc-500 transition-all duration-300 ease-in-out ${
							isOpen ? "opacity-0 scale-90" : "opacity-100 scale-100"
						}`}
					>
						☰
					</span>
					<span
						className={`absolute top-4 left-4 text-3xl text-zinc-500 transition-all duration-300 ease-in-out ${
							isOpen ? "opacity-100 scale-100" : "opacity-0 scale-90"
						}`}
					>
						🗙
					</span>
				</button>
			)}

			<nav
				className={`absolute z-[10000] flex bg-gradient-to-b from-black/50 backdrop-blur-xs to-transparent ${
					isMobile
						? `fixed h-full w-[80%] flex-col justify-between items-start transition-transform duration-500 ease-in-out ${
								isOpen ? "translate-x-0" : "-translate-x-full"
						  }`
						: "sticky h-32 top-0 w-full flex-row justify-between items-center"
				}`}
			>
				<Link to="/" onClick={isMobile ? closeMenu : undefined}>
					<img
						src={logo}
						alt="Event logo"
						className="w-40 m-10 max-sm:translate-y-20 max-sm:mt-5"
					/>
				</Link>
				<div className="w-full h-full flex flex-col sm:flex-row items-start sm:items-center justify-center sm:justify-end md:flex-row p-5 gap-10">
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
