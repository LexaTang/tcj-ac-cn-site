module.exports = {
  purge: [],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {
      screens: {
        'landscape': {'raw': '(orientation: landscape)'}
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
