/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
  theme: {
      extend: {
          colors: {
              home_yellow: '#252F18',
              home_black: '#12121B',
              dark: '#141722',
              yellow: '#fcbd45',
              gray_light: '#191e25',
              modal: '#00040d'
          },
          fontFamily: {
              "raleway": 'Raleway, sans-serif'
          },
      },
  },
  plugins: [],
}

