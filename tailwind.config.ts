import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "bg-primary": "#FFFFFF",
        "bg-secondary": "#F4F4F4",
        "bg-tertiary": "#E9E9E9",
        "text-primary": "#1A1A1A",
        "text-secondary": "#555555",
        "text-muted": "#888888",
        border: "#E0E0E0",
        "border-hover": "#CCCCCC",
        "brand-orange": "#FE5E17",
        "brand-blue": "#1D60F1",
        "footer-bg": "#1A1A1A",
      },
      fontFamily: {
        display: ["var(--font-outfit)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
      },
      boxShadow: {
        soft: "0 2px 16px rgba(0,0,0,0.07)",
        card: "0 4px 20px rgba(0,0,0,0.08)",
        orange: "0 4px 20px rgba(254,94,23,0.10)",
      },
      animation: {
        marquee: "marquee 30s linear infinite",
        "marquee-2": "marquee2 30s linear infinite",
        "fade-up": "fadeUp 0.5s cubic-bezier(0.25,0.46,0.45,0.94) forwards",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" },
        },
        marquee2: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0%)" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
