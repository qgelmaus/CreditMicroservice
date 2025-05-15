import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "node:path";
// https://vite.dev/config/
export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: {
			"ui-core": path.resolve(__dirname, "../../packages/ui-core/src"),
			src: path.resolve(__dirname, "src"),
		},
	},
});
