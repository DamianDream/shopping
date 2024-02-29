import { defineConfig } from "vite";
import { resolve } from "path";
import react from "@vitejs/plugin-react";

export default defineConfig(({ mode }) => {
	const isProduction = mode === "production";
	const isDevelopment = mode === "development";

	return {
		envPrefix: "APP_",
		resolve: {
			alias: {
				"@": resolve(__dirname, "./src"),
				"@img": resolve(__dirname, "./src/assets/images"),
				"@utils": resolve(__dirname, "./src/utils"),
			},
		},
		server: {
			proxy: {
				"/api": {
					target: 'https://fakestoreapi.com',
					changeOrigin: true,
					rewrite: (path) => path.replace(/^\/api/, ""),
				},
			},
		},
		css: {
			devSourcemap: isDevelopment,
		},
		build: {
			minify: isProduction,
			cssMinify: isProduction,
			sourcemap: isDevelopment,
			emptyOutDir: true,
			outDir: resolve(__dirname, "dist"),
		},
		plugins: [react()],
	};
});
