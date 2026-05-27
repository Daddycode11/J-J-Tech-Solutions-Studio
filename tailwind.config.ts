import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],

  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    extend: {
      colors: {
        brand: {
          bg: "#0A0F1E",
          surface: "#111827",
          border: "#1F2A3C",
          blue: "#3B82F6",
          "blue-dim": "#1D4ED8",
          amber: "#F59E0B",
          "amber-dim": "#D97706",
          text: "#F1F5F9",
          muted: "#64748B",
          subtle: "#94A3B8",
        },
      },

      fontFamily: {
        display: ["var(--font-syne)", "sans-serif"],
        body: ["var(--font-dm-sans)", "sans-serif"],
      },

      backgroundImage: {
        "grid-pattern":
          "linear-gradient(rgba(59,130,246,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,0.05) 1px, transparent 1px)",
        "hero-glow":
          "radial-gradient(ellipse 80% 50% at 50% -10%, rgba(59,130,246,0.25), transparent)",
        "card-shine":
          "linear-gradient(135deg, rgba(59,130,246,0.08) 0%, transparent 60%)",
      },

      backgroundSize: {
        grid: "40px 40px",
      },

      animation: {
        "fade-up": "fadeUp 0.6s ease forwards",
        "fade-in": "fadeIn 0.5s ease forwards",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        float: "float 6s ease-in-out infinite",
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
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
      },

      boxShadow: {
        "glow-blue": "0 0 30px rgba(59,130,246,0.25)",
        "glow-amber": "0 0 30px rgba(245,158,11,0.2)",
        card: "0 4px 24px rgba(0,0,0,0.4)",
        "card-hover": "0 8px 40px rgba(59,130,246,0.2)",
      },
    },
  },

  plugins: [],
};

export default config;