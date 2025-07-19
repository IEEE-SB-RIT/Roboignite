import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
	const { pathname } = useLocation();

	useEffect(() => {
		// Scroll to top on every pathname change
		window.scrollTo({ top: 0, behavior: "smooth" });
	}, [pathname]);

	return null; // This component doesn't render anything
}
