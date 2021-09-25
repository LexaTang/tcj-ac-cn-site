module.exports = {
  purge: [],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {
      height: {
        vw: '100',
      },
      screens: {
        'wide': {'raw': '(min-aspect-ratio: 2/1)'},
        'landscape': {'raw': '(orientation: landscape)'},
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
