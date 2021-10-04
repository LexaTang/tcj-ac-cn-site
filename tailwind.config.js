module.exports = {
  purge: [],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {
      backgroundSize: {
        vw: '100vw',
        vh: '100vh',
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
