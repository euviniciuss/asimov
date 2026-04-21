import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/presentation/**/*.{ts,tsx}",
    "./src/lib/**/*.{ts,tsx}",
  ],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      colors: {
        green: "#B9FF66",
        dark: "#191A23",
        gray: "#F3F3F3",
        white: "#FFFFFF",
      },
      maxWidth: {
        app: "1440px",
      },
      spacing: {
        "app-mobile": "20px",
        "app-desktop": "100px",
      },
      fontFamily: {
        sans: ["var(--font-space-grotesk)"],
      },
      fontSize: {
        "h1-mobile": ["2.6875rem", { lineHeight: "1.1", fontWeight: "500" }],
        "h2-mobile": ["2.25rem", { lineHeight: "1.15", fontWeight: "500" }],
        "h3-mobile": ["1.625rem", { lineHeight: "1.2", fontWeight: "500" }],
        "h4-mobile": ["1.125rem", { lineHeight: "1.3", fontWeight: "500" }],
        "p-mobile": ["1rem", { lineHeight: "1.5", fontWeight: "400" }],
        h1: ["3.75rem", { lineHeight: "1.1", fontWeight: "500" }],
        h2: ["2.5rem", { lineHeight: "1.15", fontWeight: "500" }],
        h3: ["1.875rem", { lineHeight: "1.2", fontWeight: "500" }],
        h4: ["1.25rem", { lineHeight: "1.3", fontWeight: "500" }],
        p: ["1.125rem", { lineHeight: "1.5", fontWeight: "400" }],
      },
    },
  },
  plugins: [],
};

export default config;
