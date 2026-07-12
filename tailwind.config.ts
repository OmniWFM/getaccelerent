import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        paper: "#F6F4EF",
        band: "#EEEBE2",
        navy: {
          DEFAULT: "#0D1528",
          deep: "#131C31",
          footer: "#0A1122",
          cta: "#131C31",
        },
        "navy-deep": "#131C31",
        ink: "#131C31",
        body: "#38415A",
        muted: "#5C6577",
        gold: {
          DEFAULT: "#C9A24B",
          light: "#E0C079",
          dark: "#A8853A",
        },
        indigo: {
          brand: "#3D4982",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
        sans: ["var(--font-body)", "system-ui", "sans-serif"],
      },
      borderColor: {
        hair: "rgba(19,28,49,.1)",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        fadeUp: "fadeUp 0.9s cubic-bezier(.2,.7,.2,1) forwards",
        fadeIn: "fadeIn 1.2s ease-out forwards",
      },
    },
  },
  plugins: [],
};

export default config;
