import { Link, useLocation } from "react-router-dom";

interface NavItemProps {
	text: string;
	path: string;
	onClick?: () => void;
	isMobile?: boolean;
}

const NavItem = ({ text, path, onClick, isMobile }: NavItemProps) => {
	const location = useLocation();
	const handleClick = () => {
		if (isMobile && onClick) {
			onClick();
		}
	};

	// Check if current path matches the nav item's path
	const isActive = location.pathname === path;

	return (
		<div>
			<Link
				to={path}
				className={`font-josefin px-4 py-2 text-2xl font-medium transition-colors ${
					isActive ? "text-white " : "text-zinc-400 hover:text-[var(--primary)]"
				}`}
				onClick={handleClick}
			>
				{text}
			</Link>
		</div>
	);
};

export default NavItem;
