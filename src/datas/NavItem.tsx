import { Link } from "react-router-dom";

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
		<div>
			<Link
				to={path}
				className="text-zinc-400 font-josefin hover:text-[var(--primary)] px-4 py-2 text-2xl font-medium transition-colors"
				onClick={handleClick}
			>
				{text}
			</Link>
		</div>
	);
};

export default NavItem;
