import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    screens: {
      'xxs': '320px',    // Extra small mobile (iPhone SE, older Android)
      'xs': '375px',     // Small mobile (iPhone 12/13/14)
      'xsm': '414px',    // Medium mobile (iPhone Plus, large Android)
      'sm': '640px',     // Tablet portrait
      'md': '768px',     // Tablet landscape
      'lg': '1024px',    // Desktop/laptop
      'xl': '1280px',    // Large desktop
      '2xl': '1536px',   // Extra large desktop
    },
    extend: {
      fontFamily: {
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      height: {
        'viewport-minus-nav': 'calc(100vh - 4rem)',      // 64px navbar
        'viewport-minus-all': 'calc(100vh - 11.5rem)',   // 64px navbar + 120px footer
      },
      minHeight: {
        'viewport-minus-nav': 'calc(100vh - 4rem)',
      },
      maxHeight: {
        'viewport-minus-all': 'calc(100vh - 11.5rem)',
      },
      backgroundImage: {
        'gradient-primary': 'var(--gradient-primary)',
        'gradient-glow': 'var(--gradient-glow)',
        'gradient-accent': 'var(--gradient-accent)',
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
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
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
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
        "fade-in": {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "gradient-shift": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        "cursor-blink": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
        "glow-pulse": {
          "0%, 100%": { opacity: "0.15" },
          "50%": { opacity: "0.25" },
        },
        "wave-slow": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "wave-slower": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-33%)" },
        },
        "title-fade-out": {
          "0%": {
            opacity: "1",
            color: "hsl(0 0% 88%)", // foreground color
          },
          "70%": {
            opacity: "0.3",
            color: "hsl(0 0% 50%)", // darker gray
          },
          "100%": {
            opacity: "0",
            color: "hsl(0 0% 20%)", // very dark gray
          },
        },
        "title-fade-in": {
          "0%": {
            opacity: "0",
          },
          "30%": {
            opacity: "0.4",
          },
          "60%": {
            opacity: "0.7",
          },
          "100%": {
            opacity: "1",
          },
        },
        "title-gradient-shift": {
          "0%": {
            color: "hsl(190 100% 50%)", // primary cyan
          },
          "50%": {
            color: "hsl(258 90% 66%)", // accent purple
          },
          "100%": {
            color: "hsl(0 0% 88%)", // foreground
          },
        },
        "dot-pulse": {
          "0%, 100%": { opacity: "0.3" },
          "50%": { opacity: "0.6" },
        },
        "pulse-border": {
          "0%, 100%": {
            borderColor: "hsl(190 100% 50% / 0.3)",
            backgroundColor: "hsl(190 100% 50% / 0.05)",
            boxShadow: "0 0 0 0 hsl(190 100% 50% / 0)",
          },
          "50%": {
            borderColor: "hsl(190 100% 50% / 0.6)",
            backgroundColor: "hsl(190 100% 50% / 0.08)",
            boxShadow: "0 0 8px 0 hsl(190 100% 50% / 0.2)",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 0.6s ease-out",
        "gradient-shift": "gradient-shift 8s ease infinite",
        "cursor-blink": "cursor-blink 1s step-end infinite",
        "glow-pulse": "glow-pulse 4s ease-in-out infinite",
        "wave-slow": "wave-slow 25s linear infinite",
        "wave-slower": "wave-slower 30s linear infinite",
        "title-fade-out": "title-fade-out 1s ease-in-out forwards",
        "title-fade-in": "title-fade-in 1.2s ease-in-out forwards",
        "title-gradient-shift": "title-gradient-shift 1.2s ease-in-out forwards",
        "dot-pulse": "dot-pulse 6s ease-in-out infinite",
        "pulse-border": "pulse-border 2.5s ease-in-out infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
