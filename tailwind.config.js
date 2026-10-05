/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        paper: "#EFEFEC",
        ink: "#0E0E0E",
        smoke: "#6E6E6A",
        line: "rgba(14, 14, 14, 0.12)",
        // Ceylon sapphire — the only accent on the site
        sapphire: {
          DEFAULT: "#1F3BDB",
          deep: "#14279B",
          light: "#8C9CFF",
        },
      },
      fontFamily: {
        display: ['"Clash Display"', '"Switzer"', "system-ui", "sans-serif"],
        sans: ['"Switzer"', "system-ui", "-apple-system", "sans-serif"],
        mono: ['"JetBrains Mono"', "ui-monospace", "SFMono-Regular", "monospace"],
      },
      letterSpacing: {
        tightest: "-0.045em",
      },
      transitionTimingFunction: {
        expo: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
    },
  },
  plugins: [],
};
