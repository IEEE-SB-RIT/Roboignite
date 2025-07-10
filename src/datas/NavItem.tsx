import { Link } from "react-router-dom";
import { motion } from "framer-motion";

interface NavItemProps {
	text: string;
	path: string;
	onClick?: () => void;
	isMobile?: boolean;
}

const NavItem = ({ text, path, onClick, isMobile }: NavItemProps) => {
	const handleClick = () => {
		if (isMobile && onClick) {
			onClick();
		}
	};

	return (
		<motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
			<Link
				to={path}
				className="text-zinc-400 font-josefin hover:text-[var(--primary)] px-4 py-2 text-2xl font-medium transition-colors"
				onClick={handleClick}
			>
				{text}
			</Link>
		</motion.div>
	);
};

export default NavItem;
