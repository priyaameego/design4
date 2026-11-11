/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
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
        // ScoreLabs inspired Cyber Teal & Deep Navy Palette
        teal: {
          50: '#F0FDF9',
          100: '#CCFBF1',
          200: '#99F6E4',
          300: '#5EEAD4',
          400: '#2DD4BF',
          500: '#00A896', // Primary Teal
          600: '#028090', // Deep Cyan / Teal
          700: '#0F766E',
          glow: 'rgba(0, 168, 150, 0.25)',
        },
        navy: {
          950: "#051329", // Ultra Deep Navy / Black
          900: "#0B1D3A", // ScoreLabs Deep Navy
          850: "#0F284E",
          800: "#133565",
          700: "#1B4783",
          600: "#2563EB", // Vibrant Blue
          500: "#3B82F6",
          100: "#E2E8F0",
          50: "#F8FAFC",
        },
        graphite: {
          DEFAULT: '#0A1628',
          light: '#14253E',
          lighter: '#1E3555',
          muted: '#64748B',
          border: 'rgba(255, 255, 255, 0.12)',
        },
        orange: {
          accent: '#FF7A00', // Reference Image 4 orange highlight
          hover: '#FF9124',
        },
        // Two-color compatibility tokens
        violet: {
          royal: '#00A896', // Remapped to primary teal for seamless integration
          hover: '#028090',
          soft: '#E6FAF6',
        },
        corporate: {
          navy: "#071B49",
          blue: "#063B83",
          electric: "#087FE5",
          cyan: "#08B9E8",
          surface: "#F3F7FC",
          charcoal: "#18243A",
          dark: "#040F2B",
          border: "rgba(8, 185, 232, 0.2)",
          borderSoft: "rgba(7, 27, 73, 0.1)",
        },
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Manrope', 'system-ui', 'sans-serif'],
        heading: ['Sora', 'Plus Jakarta Sans', 'sans-serif'],
        display: ['Sora', 'Plus Jakarta Sans', 'sans-serif'],
        mono: ['Space Grotesk', 'JetBrains Mono', 'monospace'],
      },
      boxShadow: {
        'brand-glow': '0 0 35px rgba(8, 185, 232, 0.3)',
        'electric-glow': '0 8px 30px rgba(8, 127, 229, 0.35)',
        'corporate-card': '0 10px 30px rgba(7, 27, 73, 0.08), 0 1px 3px rgba(0, 0, 0, 0.05)',
        'corporate-hover': '0 20px 45px rgba(7, 27, 73, 0.16), 0 0 30px rgba(8, 185, 232, 0.15)',
        'dark-card': '0 16px 40px rgba(4, 15, 43, 0.55)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'slide-up': 'slideUp 0.6s ease-out forwards',
        'pulse-subtle': 'pulseSubtle 3s ease-in-out infinite',
        'float-slow': 'floatSlow 6s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.92', transform: 'scale(1.02)' },
        },
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
      },
    },
  },
  plugins: [],
}
