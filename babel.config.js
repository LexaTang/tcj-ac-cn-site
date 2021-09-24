module.exports = {
  presets: [['@babel/preset-env', {
    useBuiltIns: 'usage',
    corejs: '3.15',
    exclude: ['transform-typeof-symbol'],
  }], '@babel/preset-react', '@babel/preset-typescript'],
  plugins: ['@babel/plugin-transform-runtime'],
};
