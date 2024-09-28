/** @type {import('tailwindcss').Config} */

const theme = {
  primary: {
    60: "#24CCFF",
    50: "#56D2FF",
    40: "#74D8FF",
    30: "#8DDDFF",
    20: "#A3E3FF",
    15: "#B7E9FF",
    10: "#CAEEFF",
    5: "#DCF4FF",
    0: "#EEF9FF",
  },
  neutral: {
    100: "#020617",
    90: "#0F172A",
    80: "#1E293B",
    70: "#334155",
    60: "#475569",
    50: "#64748B",
    40: "#94A3B8",
    30: "#CBD5E1",
    20: "#E2E8F0",
    10: "#F1F5F9",
    0: "#F8FAFC",
  },
  red: {
    80: "#991B1B",
    70: "#B91C1C",
    60: "#DC2626",
    50: "#EF4444",
    40: "#F87171",
    30: "#FCA5A5",
    20: "#FECACA",
    10: "#FEE2E2",
    0: "#FEF2F2",
  },
  green: {
    80: "#065F46",
    70: "#047857",
    60: "#059669",
    50: "#10B981",
    40: "#34D399",
    30: "#6EE7B7",
    20: "#A7F3D0",
    10: "#D1FAE5",
    0: "#ECFDF5",
  },
};
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
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
      backgroundColor: theme,
      borderColor: theme,
      colors: {
        ...theme,
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
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
};
