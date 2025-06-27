import NavItem from "./navItem";
import logo from "./assets/RoboIgnite.png";
import { Link } from "react-router-dom";

const Navbar = () => {
	return (
		<nav className="h-24 flex justify-around items-center bg-gray-400">
			<Link to="/">
				<img src={logo} alt="Event logo" className="w-20" />
			</Link>
			<NavItem text="About" path="/about" />
			<NavItem text="Events" path="/events" />
			<NavItem text="Contact" path="/contact" />
		</nav>
	);
};

export default Navbar;
