/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode : 'class',
  theme: {
    extend: {
      screens : {
        'max-sm': { 'max': '639px' },   // Screens with a maximum width of 639px
        'max-md': { 'max': '767px' },   // Screens with a maximum width of 767px
        'max-lg': { 'max': '1023px' },  // Screens with a maximum width of 1023px
        'max-xl': { 'max': '1279px' },
      }
    },
  },
  plugins: [],
}

