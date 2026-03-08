/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        tundora: '#404040',
        luxor: '#9E822F',
        white: '#FFFFFF',
        'zrk-black': '#231f20',
        'zrk-gold': '#b8964c',
        'zrk-bg': '#f8f9fa',
        'industrial-dark': '#0a0a0a',
        'industrial-light': '#f4f4f5',
      },
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      spacing: {
        '18': '4.5rem', /* 72px */
        '22': '5.5rem', /* 88px */
        '26': '6.5rem', /* 104px */
        '30': '7.5rem', /* 120px */
      },
      aspectRatio: {
        'hero': '1.85 / 1',
        'product': '4 / 3',
        'application': '16 / 9',
        'sample': '4 / 3',
        'catalog': '1 / 1',
      },
      transitionTimingFunction: {
        'industrial': 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
      transitionDuration: {
        'MAX': '600ms',
      },
      borderRadius: {
        'none': '0px',
        'sm': '0px',
        DEFAULT: '0px',
        'md': '0px',
        'lg': '0px',
        'xl': '0px',
        '2xl': '0px',
        '3xl': '0px',
        'full': '0px',
      },
    },
  },
  plugins: [],
}
