const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        teal: colors.teal,
        orange: colors.orange,
        red: colors.red,
      },
      fontFamily: {
        "open": ["OpenSans",],
        "mont": ["Montserrat",],
        "rale": ["Raleway",],
      },
      backgroundImage: theme => ({
        'hero': "url('./images/bg-hero.jpg')",
      })
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
