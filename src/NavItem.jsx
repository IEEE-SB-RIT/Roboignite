import { Link } from "react-router-dom";

const NavItem = ({ text = "navItem", path = "*" }) => {
	return (
		<Link
			to={path}
			className="text-black transition-transform hover:scale-105 duration-200"
		>
			{text}
		</Link>
	);
};

export default NavItem;
