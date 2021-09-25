module.exports = {
  purge: [],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {
      height: {
        vw: '100vw',
      },
      screens: {
        'wide': {'raw': '(min-aspect-ratio: 21/9)'},
        'landscape': {'raw': '(orientation: landscape)'},
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
