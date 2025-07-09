import Navbar from "./navBar";
import { Routes, Route } from "react-router-dom";
import Landing from "./Landing";
import About from "./About";
import Events from "./Events";
import Gallery from "./Gallery";
import NotFound from "./notFound";
import Footer from "./footer";


export default function App() {
	return (
		<>
			<Navbar />

			<Routes>
				<Route path="/" element={<Landing />} />
				<Route path="/about" element={<About />} />
				<Route path="/events" element={<Events />} />
				<Route path="/gallery" element={<Gallery />} />
				<Route path="*" element={<NotFound />} />
			</Routes>
			<Footer />
		</>
	);
}
