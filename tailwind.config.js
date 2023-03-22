/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  darkMode: 'class',
  content: [
    './src/**/*.{html,js,jsx}',
    './src/components/**/*.{html,js,jsx}',
  ],
  mode: 'jit',
  theme: {
    extend: {
       colors: {
        'primary-black': '#1A232E',
        'secondary-white': '#c7c7c7',
      },
      transitionTimingFunction: {
        'out-flex': 'cubic-bezier(0.05, 0.6, 0.4, 0.9)',
      },
      screens: {
      'xs': '380px',
      // => @media (min-width: 380px) { ... }
      'sm': '640px',
      // => @media (min-width: 640px) { ... }
      'md': '826px',
      // => @media (min-width: 768px) { ... }
      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }
      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }
      '2xl':'1536px',
      // => @media (min-width: 1536px) { ... }
      },
    },
  },
  plugins: [],
}
