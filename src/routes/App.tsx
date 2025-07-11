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
				<Route path={import.meta.env.BASE_URL + "/"} element={<Landing />} />
				<Route path="/about" element={<About />} />
				<Route path="/events" element={<Events />} />
				<Route path="/gallery" element={<Gallery />} />
				<Route path="*" element={<NotFound />} />
			</Routes>
			<Footer />
		</>
	);
}
