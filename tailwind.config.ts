import type { Config } from "tailwindcss";

export default {
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
      fontFamily: {
        sans: ['Parkinsans', 'sans-serif'],
        african: ['"African Sans"', 'Parkinsans', 'sans-serif'], // Added African-style font fallback
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        // Updated color palette with African-inspired colors
        primary: {
          DEFAULT: "#FFD700", // Gold
          foreground: "#1A1F2C",
        },
        secondary: {
          DEFAULT: "#E25822", // Terracotta
          foreground: "#FFFFFF",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "#C8C8C9",
          foreground: "#1A1F2C",
        },
        accent: {
          DEFAULT: "#008751", // Green
          foreground: "#FFFFFF",
        },
        card: {
          DEFAULT: "rgba(26, 31, 44, 0.8)",
          foreground: "#FFFFFF",
        },
        // Additional African-inspired colors
        earth: "#654321", // Dark brown
        sunset: "#D35400", // Orange
        savanna: "#F39C12", // Yellow
      },
      animation: {
        "spin-slow": "spin 3s linear infinite",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "fade-in": "fadeIn 0.5s ease-in-out",
        "wave": "wave 8s linear infinite",
        // New animations for African theme
        "float": "float 6s ease-in-out infinite",
        "fade-in-up": "fadeInUp 0.5s ease-out",
        "drumbeat": "drumbeat 1s ease infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        wave: {
          "0%": { transform: "translateY(0px)" },
          "25%": { transform: "translateY(-4px)" },
          "50%": { transform: "translateY(0px)" },
          "75%": { transform: "translateY(4px)" },
          "100%": { transform: "translateY(0px)" },
        },
        // New keyframes for African theme
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px)" },
        },
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        drumbeat: {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.05)" },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        // African pattern gradients
        "african-pattern": "url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiPjxkZWZzPjxwYXR0ZXJuIGlkPSJhZGlua28iIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCI+PHBhdGggZD0iTTAgMzBWMHYzMEg2MFY2MEgzMHYzMEgwdjMwWiIgZmlsbD0iI2ZmZiIgZmlsbC1vcGFjaXR5PSIwLjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjYWRpbmtvKSIvPjwvc3ZnPg==')",
        "gradient-african": "linear-gradient(135deg, #FFD700 0%, #E25822 50%, #008751 100%)",
      },
      boxShadow: {
        "african": "0 4px 20px rgba(210, 84, 0, 0.3)",
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    // Additional plugins for African theme
    function({ addUtilities }: any) {
      addUtilities({
        '.text-african-gradient': {
          background: 'linear-gradient(90deg, #FFD700, #E25822, #008751)',
          '-webkit-background-clip': 'text',
          '-webkit-text-fill-color': 'transparent',
        },
        '.bg-african-pattern': {
          backgroundImage: "url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiPjxkZWZzPjxwYXR0ZXJuIGlkPSJhZGlua28iIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCI+PHBhdGggZD0iTTAgMzBWMHYzMEg2MFY2MEgzMHYzMEgwdjMwWiIgZmlsbD0iI2ZmZiIgZmlsbC1vcGFjaXR5PSIwLjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjYWRpbmtvKSIvPjwvc3ZnPg==')",
          backgroundSize: '100px 100px',
          opacity: '0.1',
        },
      })
    },
  ],
} satisfies Config;