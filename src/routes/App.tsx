import Navbar from "../components/navBar.tsx";
import { Routes, Route } from "react-router-dom";
import Landing from "../pages/Landing.tsx";
import About from "../pages/About.tsx";
import Events from "../pages/Events.tsx";
import Gallery from "../pages/Gallery.tsx";
import NotFound from "../pages/notFound.tsx";
import Footer from "../components/footer.tsx";

export default function App() {
	return (
		<>
			<Navbar />

			<Routes>
				<Route path="/Roboignite/" element={<Landing />} />
				<Route path="/Roboignite/about" element={<About />} />
				<Route path="/Roboignite/events" element={<Events />} />
				<Route path="/Roboignite/gallery" element={<Gallery />} />
				<Route path="*" element={<NotFound />} />
			</Routes>
			<Footer />
		</>
	);
}
