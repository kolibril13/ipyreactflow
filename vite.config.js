// vite.config.js
import { defineConfig } from "vite";
import react from '@vitejs/plugin-react'


export default defineConfig(async ({ command }) => {
	let define = {};
	if (command === "build") {
		define["process.env.NODE_ENV"] = JSON.stringify("production");
	}
	return {
		plugins: [react()],
		build: {
			outDir: "ipymafs/static",
			lib: {
				entry: ["src/widget.jsx"],
				formats: ["es"],
			},
		},
		define,
	}
});