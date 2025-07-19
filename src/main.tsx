import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./routes/App.tsx";
import ScrollToTop from "./components/scrollToTop";

const rootEl = document.getElementById("root");

if (!rootEl) {
	throw new Error("Root element not found");
}

createRoot(rootEl).render(
	<StrictMode>
		<BrowserRouter basename={import.meta.env.BASE_URL}>
			<ScrollToTop />
			<App />
		</BrowserRouter>
	</StrictMode>
);
