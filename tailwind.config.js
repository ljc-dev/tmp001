const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        teal: colors.teal,
      },
      fontFamily: {
        "open": ["OpenSans",],
        "mont": ["Montserrat",],
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
