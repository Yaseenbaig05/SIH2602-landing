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
        background: "#08090C",
        foreground: "#E2E8F0",
        coal: {
          950: "#0b0d11",
          900: "#12151c",
          850: "#181c25",
          800: "#202532",
          700: "#2c3343",
          600: "#414b5c",
        },
        amber: {
          mining: "#F59E0B",
          glow: "#D97706",
          light: "#FDE68A",
        },
        gold: {
          50: "#fffbeb",
          100: "#fef3c7",
          200: "#fde68a",
          300: "#fcd34d",
          400: "#fbbf24",
          500: "#f59e0b",
          600: "#d97706",
          700: "#b45309",
          800: "#92400e",
          900: "#78350f",
        },
        emerald: {
          statutory: "#10B981",
          bright: "#34D399",
        },
        crimson: {
          hazard: "#EF4444",
          alarm: "#DC2626",
        },
        cyan: {
          telemetry: "#06B6D4",
          hud: "#22D3EE",
        },
      },
      fontFamily: {
        mono: ["var(--font-mono)", "JetBrains Mono", "ui-monospace", "monospace"],
        sans: ["var(--font-sans)", "Plus Jakarta Sans", "Inter", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "grid-pattern": "linear-gradient(to right, rgba(255, 255, 255, 0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.04) 1px, transparent 1px)",
        "radar-radial": "radial-gradient(circle at center, rgba(245, 158, 11, 0.15) 0%, rgba(16, 185, 129, 0.05) 45%, transparent 70%)",
        "topo-lines": "radial-gradient(ellipse at top, rgba(6, 182, 212, 0.08), transparent 60%)",
      },
      animation: {
        "pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
    },
  },
  plugins: [],
};
export default config;
