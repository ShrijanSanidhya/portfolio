/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: { DEFAULT: '#0a0a0f', surface: '#111118', card: '#16161f' },
        purple: { DEFAULT: '#7c3aed', light: '#a78bfa', dark: '#5b21b6' },
        cyan: { DEFAULT: '#06b6d4', light: '#67e8f9', dark: '#0891b2' },
        amber: { DEFAULT: '#f59e0b', light: '#fcd34d' },
        pink: { DEFAULT: '#ec4899', light: '#f9a8d4' },
        glass: { DEFAULT: 'rgba(255,255,255,0.04)', border: 'rgba(255,255,255,0.08)' }
      },
      fontFamily: {
        syne: ['Syne', 'sans-serif'],
        dm: ['DM Sans', 'sans-serif'],
        mono: ['DM Mono', 'monospace'],
      },
      borderRadius: {
        glass: '20px',
        pill: '100px',
      }
    },
  },
  plugins: [],
}
