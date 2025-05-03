import animate from "tailwindcss-animate";

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          1: "hsl(var(--chart-1))",
          2: "hsl(var(--chart-2))",
          3: "hsl(var(--chart-3))",
          4: "hsl(var(--chart-4))",
          5: "hsl(var(--chart-5))",
        },
        text: "#f1f5f9",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        // Original keyframes
        blob: {
          "0%, 100%": { transform: "translate(0px, 0px) scale(1)" },
          "33%": { transform: "translate(30px, -50px) scale(1.1)" },
          "66%": { transform: "translate(-20px, 20px) scale(0.9)" },
        },
        
        // New keyframes for AboutSection
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-15px)" },
        },
        pulse: {
          "0%, 100%": { opacity: 0.3, transform: "scale(1)" },
          "50%": { opacity: 0.5, transform: "scale(1.05)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        breathe: {
          "0%, 100%": { boxShadow: "0 0 15px rgba(16, 185, 129, 0.5)" },
          "50%": { boxShadow: "0 0 25px rgba(16, 185, 129, 0.8)" },
        },
        gradientShift: {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
        moveRight: {
          "0%, 100%": { transform: "translateX(0)" },
          "50%": { transform: "translateX(5px)" },
        },
      },
      animation: {
        // Original animations
        blob: "blob 20s infinite",
        
        // New animations for AboutSection
        float: "float 6s ease-in-out infinite",
        pulse: "pulse 8s ease-in-out infinite",
        shimmer: "shimmer 8s ease-in-out infinite",
        breathe: "breathe 4s ease-in-out infinite",
        gradient: "gradientShift 15s ease infinite",
        moveRight: "moveRight 1.5s ease-in-out infinite",
      },
      animationDelay: {
        2000: "2s",
        4000: "4s",
        1500: "1.5s",
        3000: "3s",
      },
      backgroundSize: {
        '400': '400% 400%',
      },
      transitionProperty: {
        'glow': 'box-shadow, transform',
      },
    },
  },
  plugins: [animate],
};