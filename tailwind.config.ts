import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#0a0a1a",
        "bg-card": "#12122a",
        "bg-surface": "#1a1a3a",
        accent: "#00e676",
        "accent-glow": "rgba(0,230,118,0.15)",
        danger: "#ff5252",
        muted: "#9e9e9e",
        "text-primary": "#ffffff",
        "text-secondary": "#b0b0c0",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
