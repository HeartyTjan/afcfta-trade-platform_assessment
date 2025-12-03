/** @type {import('tailwindcss').Config} */

export default {
  darkMode: ["class"],
  content: [
    "./index.html",
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./app/**/*.{js,jsx}",
    "./src/**/*.{js,jsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        // Base theme colors
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",

        // Primary colors (Blue theme)
        primary: {
          DEFAULT: "hsl(var(--primary))", // Deep blue: hsl(215 80% 22%)
          foreground: "hsl(var(--primary-foreground))",
          light: "hsl(var(--primary-light))", // hsl(215 70% 35%)
          glow: "hsl(var(--primary-glow))", // hsl(215 70% 45%)
          dark: "hsl(var(--primary-darker))", // hsl(215 80% 15%)
        },

        // Accent colors (Green theme)
        accent: {
          DEFAULT: "hsl(var(--accent))", // Vibrant green: hsl(145 80% 40%)
          foreground: "hsl(var(--accent-foreground))",
          light: "hsl(var(--accent-light))", // hsl(145 80% 50%)
          darker: "hsl(var(--accent-darker))", // hsl(145 80% 30%)
        },

        // Muted colors
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },

        // Card colors
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },

        // Destructive colors (using a red that complements blue/green)
        destructive: {
          DEFAULT: "hsl(0 84% 60%)", // Standard red for errors
          foreground: "hsl(0 0% 100%)",
        },

        // Sidebar (if needed - using primary blue variants)
        sidebar: {
          DEFAULT: "hsl(215 60% 30%)", // Medium blue
          foreground: "hsl(210 20% 98%)",
          border: "hsl(215 40% 40%)",
        },
      },

      // Backgrounds & shadows (simplified)
      backgroundImage: {
        "gradient-primary":
          "linear-gradient(to right, hsl(var(--primary)), hsl(var(--primary-light)))",
        "gradient-accent":
          "linear-gradient(to right, hsl(var(--accent)), hsl(var(--accent-light)))",
        "gradient-subtle":
          "linear-gradient(to right, hsl(var(--background)), hsl(var(--muted)))",
      },
      boxShadow: {
        "card-soft":
          "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
        glow: "0 0 20px hsl(var(--primary-glow) / 0.3)",
      },

      // Border radius
      borderRadius: {
        lg: "0.75rem",
        md: "0.5rem",
        sm: "0.25rem",
      },

      // Animations
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
  safelist: [
    "bg-primary",
    "bg-accent",
    "text-primary",
    "text-accent",
    "border-primary",
    "border-accent",
  ],
};
