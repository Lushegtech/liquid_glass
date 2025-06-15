/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './views/**/*.ejs',
    './index.html'
  ],
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
        whatsapp: {
          green: '#25D366',
          light: '#DCF8C6',
          dark: '#128C7E',
          gray: '#F0F0F0'
        }
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
        "liquid-flow": {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-5px)" },
        },
        "glass-shimmer": {
          "0%": { 
            backgroundPosition: "-468px 0" 
          },
          "100%": { 
            backgroundPosition: "468px 0" 
          }
        }
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "liquid-flow": "liquid-flow 3s ease-in-out infinite",
        "glass-shimmer": "glass-shimmer 1.5s ease-in-out infinite",
      },
      backdropBlur: {
        'xs': '2px',
        '4xl': '72px',
      },
      backgroundImage: {
        'liquid-glass': 'linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05))',
        'whatsapp-pattern': "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.03'%3E%3Ccircle cx='7' cy='7' r='7'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")"
      },
      boxShadow: {
        'liquid': '0 8px 32px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.1)',
        'glass': '0 4px 24px rgba(0, 0, 0, 0.12), inset 0 1px 0 rgba(255, 255, 255, 0.2)',
        'whatsapp': '0 2px 10px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08)'
      }
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    function({ addUtilities }) {
      const newUtilities = {
        '.liquid-glass': {
          background: 'rgba(255, 255, 255, 0.1)',
          backdropFilter: 'blur(10px) saturate(150%)',
          WebkitBackdropFilter: 'blur(10px) saturate(150%)',
          border: '1px solid rgba(255, 255, 255, 0.2)',
        },
        '.liquid-glass-dark': {
          background: 'rgba(0, 0, 0, 0.1)',
          backdropFilter: 'blur(10px) saturate(150%)',
          WebkitBackdropFilter: 'blur(10px) saturate(150%)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
        }
      }
      addUtilities(newUtilities)
    }
  ],
} 