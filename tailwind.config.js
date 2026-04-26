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
          DEFAULT: '#080c14', 
          surface: '#0d1117', 
          card: '#111827',
          hover: '#161f2e'
        },
        accent: { 
          DEFAULT: '#3b82f6', 
          dim: 'rgba(59,130,246,0.12)', 
          glow: 'rgba(59,130,246,0.15)' 
        },
        border: { 
          DEFAULT: 'rgba(255,255,255,0.06)', 
          hover: 'rgba(255,255,255,0.12)',
          accent: 'rgba(59,130,246,0.3)'
        },
        text: {
          primary: '#f1f5f9',
          secondary: '#94a3b8',
          tertiary: '#475569'
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Cal Sans', 'Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      borderRadius: {
        glass: '12px', // Renamed but kept token name for compatibility if needed
        pill: '100px',
      }
    },
  },
  plugins: [],
}
