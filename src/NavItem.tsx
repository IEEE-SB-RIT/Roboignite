import { Link } from "react-router-dom";

const NavItem = ({ text = "navItem", path = "*" }) => {
	return (
		<Link
			to={path}
			className="text-black/80 text-2xl font-josefin transition-transform hover:scale-105 hover:text-black  duration-200"
		>
			{text}
		</Link>
	);
};

export default NavItem;
