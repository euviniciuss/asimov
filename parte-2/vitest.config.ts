import { resolve } from "node:path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vitest/config";

export default defineConfig({
	plugins: [react()],
	test: {
		environment: "happy-dom",
		globals: true,
		setupFiles: ["./src/test/setup.ts"],
		include: ["src/**/*.test.{ts,tsx}"],
		server: {
			deps: {
				inline: [/@csstools/, /@asamuzakjp/],
			},
		},
		coverage: {
			provider: "v8",
			reporter: ["text", "json", "html"],
			exclude: ["node_modules", ".next", "src/test"],
		},
	},
	resolve: {
		alias: {
			"@": resolve(__dirname, "./src"),
			"@components": resolve(__dirname, "./src/presentation/components"),
			"@flows": resolve(__dirname, "./src/presentation/flows"),
			"@ui": resolve(__dirname, "./src/presentation/components/ui"),
		},
	},
});
