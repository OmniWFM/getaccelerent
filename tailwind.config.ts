import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#0d1b3e",
          light: "#16265a",
          dark: "#08122b",
        },
        gold: {
          DEFAULT: "#c9a24b",
          light: "#e0c079",
          dark: "#a8853a",
        },
        ink: "#0a0f1f",
        paper: "#f7f5f0",
      },
      fontFamily: {
        serif: ["Georgia", "Cambria", "Times New Roman", "serif"],
        sans: ["system-ui", "-apple-system", "Segoe UI", "Roboto", "Helvetica", "Arial", "sans-serif"],
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        fadeUp: "fadeUp 0.8s ease-out forwards",
        fadeIn: "fadeIn 1.2s ease-out forwards",
      },
    },
  },
  plugins: [],
};

export default config;
