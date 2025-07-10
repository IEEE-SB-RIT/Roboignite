import NavItem from "../datas/NavItem.tsx";
import { useState, useEffect, useCallback } from "react";
import logo from "../../public/RoboIgnite.png";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Navbar = () => {
	const [isMobile, setIsMobile] = useState(false);
	const [isOpen, setIsOpen] = useState(false);

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
		const checkScreenSize = () => {
			setIsMobile(window.innerWidth <= 400);
			// Close menu when resizing to desktop
			if (window.innerWidth > 400) closeMenu();
		};

		checkScreenSize();
		window.addEventListener("resize", checkScreenSize);

		return () => window.removeEventListener("resize", checkScreenSize);
	}, [closeMenu]);

	return (
		<>
			{isMobile && (
				<button
					className="fixed z-[10000] p-4"
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
				className={`z-[9999] flex bg-[var(--navBarColor)]/80 backdrop-blur-lg ${
					isMobile
						? `fixed h-full w-[80%] flex-col justify-between items-start transition-transform duration-500 ease-in-out ${
								isOpen ? "translate-x-0" : "-translate-x-full"
						  }`
						: "sticky h-32 top-0 w-full flex-row justify-between items-center"
				}`}
			>
				<Link
					to="/"
					
					onClick={isMobile ? closeMenu : undefined}
				>
					<img src={logo} alt="Event logo" className="w-40 m-10 max-sm:translate-y-10" />
				</Link>
				<motion.div className="w-full h-full flex flex-col sm:flex-row items-start sm:items-center justify-center sm:justify-end  md:flex-row p-5 gap-10 ">
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
				</motion.div>
			</nav>
		</>
	);
};

export default Navbar;
