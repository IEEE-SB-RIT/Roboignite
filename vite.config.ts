import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
	base: "/", // Change to /Roboignite/ before pushing to github for live preview to work
	plugins: [react(), tailwindcss()],
});
