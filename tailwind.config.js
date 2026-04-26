/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          DEFAULT: '#0a0a0f',
          surface: '#12121a',
          card: '#16161f',
          hover: '#1e1e2a'
        },
        accent: {
          DEFAULT: '#a855f7',       // purple-500
          light: '#c084fc',         // purple-400
          dim: 'rgba(168,85,247,0.12)',
          glow: 'rgba(168,85,247,0.15)',
        },
        pink: {
          DEFAULT: '#ec4899',
          light: '#f472b6',
          dim: 'rgba(236,72,153,0.12)',
        },
        border: {
          DEFAULT: 'rgba(255,255,255,0.06)',
          hover: 'rgba(255,255,255,0.12)',
          accent: 'rgba(168,85,247,0.3)'
        },
        text: {
          primary: '#f1f0f5',
          secondary: '#a09db1',
          tertiary: '#5c5a6e'
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      borderRadius: {
        card: '16px',
        pill: '100px',
      },
      backgroundImage: {
        'gradient-accent': 'linear-gradient(135deg, #a855f7, #ec4899)',
        'gradient-accent-r': 'linear-gradient(135deg, #ec4899, #a855f7)',
        'gradient-subtle': 'linear-gradient(135deg, rgba(168,85,247,0.1), rgba(236,72,153,0.1))',
      },
      keyframes: {
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'glow-pulse': {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.8' },
        },
        'gradient-shift': {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
        'shimmer': {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        }
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 8s ease-in-out infinite',
        'float-slower': 'float 10s ease-in-out infinite',
        'glow-pulse': 'glow-pulse 3s ease-in-out infinite',
        'gradient-shift': 'gradient-shift 8s ease infinite',
        'shimmer': 'shimmer 2s ease-in-out infinite',
      }
    },
  },
  plugins: [],
}
