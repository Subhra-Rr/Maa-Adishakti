/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // permanently set to dark in html class
  theme: {
    extend: {
      colors: {
        sacred: {
          dark: '#070605',
          charcoal: '#0d0b09',
          surface: '#15120f',
          surfaceLight: '#1f1b16',
          border: '#33271d',
          borderGold: '#5e4822',
          maroonDark: '#1d0508',
          maroon: '#350a0f',
          maroonLight: '#4d0f17',
          crimson: '#8b1824',
          crimsonBright: '#b82030',
          gold: '#d4af37',
          goldLight: '#f0d376',
          goldDark: '#a18120',
          copper: '#c27938',
          saffron: '#e66a1f',
          saffronDeep: '#c24b08',
          ivory: '#f8f4eb',
          ivoryDim: '#dfd7c5',
          ivoryMuted: '#9e9484'
        }
      },
      fontFamily: {
        cinzel: ['"Cinzel"', 'serif'],
        cormorant: ['"Cormorant Garamond"', 'serif'],
        devanagari: ['"Noto Serif Devanagari"', 'serif'],
        odia: ['"Noto Serif Oriya"', '"Noto Sans Oriya"', 'serif'],
        sans: ['"Inter"', 'sans-serif']
      },
      backgroundImage: {
        'sacred-radial': 'radial-gradient(circle at center, rgba(61, 12, 18, 0.45) 0%, rgba(13, 11, 9, 0.95) 75%, #070605 100%)',
        'gold-shimmer': 'linear-gradient(135deg, #a18120 0%, #d4af37 35%, #fff1b8 50%, #d4af37 65%, #a18120 100%)',
        'crimson-gradient': 'linear-gradient(180deg, rgba(77, 15, 23, 0.8) 0%, rgba(21, 18, 15, 0.95) 100%)'
      },
      boxShadow: {
        'sacred-glow': '0 0 25px rgba(212, 175, 55, 0.2)',
        'sacred-glow-lg': '0 0 45px rgba(212, 175, 55, 0.35)',
        'maroon-glow': '0 0 30px rgba(139, 24, 36, 0.3)'
      }
    },
  },
  plugins: [],
}
