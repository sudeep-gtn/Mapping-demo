/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false,
  // theme: {
  //   extend: {
  //     colors: {
  //       primary: '#FF5733',
  //       secondary: '#33FF57',
  //     },
  //     fontFamily: {
  //       sans: ['Roboto', 'sans-serif'],
  //     },
  //     spacing: {
  //       '72': '18rem',
  //       '84': '21rem',
  //     },
  //   },
  // },
  // variants: {
  //   extend: {},
  // },
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
  ]
}

