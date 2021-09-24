/* eslint-disable @typescript-eslint/no-require-imports */
// Generated using webpack-cli https://github.com/webpack/webpack-cli

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const InterpolateHtmlPlugin = require('react-dev-utils/InterpolateHtmlPlugin');
const StylelintPlugin = require('stylelint-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const ContextReplacementPlugin = require('webpack/lib/ContextReplacementPlugin');

const env = require('./env.js');

const isProduction = process.env.NODE_ENV === 'production';

const stylesHandler = isProduction ? MiniCssExtractPlugin.loader : 'style-loader';


const config = {
  // target: 'web',
  entry: {
    main: { import: './src/index.tsx' },
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    clean: true,
    crossOriginLoading: 'anonymous',
  },
  devServer: {
    proxy: {
      '/graphql': {
        target: 'http://localhost:8008',
        changeOrigin: true,
      },
    },
    open: false,
    liveReload: false,
    hot: true,
    host: 'localhost',
  },
  devtool: 'source-map',
  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      template: 'public/index.html',
    }),

    // Add your plugins here
    // Learn more about plugins from https://webpack.js.org/configuration/plugins/
    new InterpolateHtmlPlugin(HtmlWebpackPlugin, env),
    new StylelintPlugin({
      files: ['**/*.{html,vue,css,sass,scss}'],
      fix: false,
      cache: true,
      failOnError: true,
    }),
    new ESLintPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/i,
        include: path.resolve(__dirname, 'src'),
        use: 'babel-loader',
      },
      {
        test: /\.(js|mjs)$/i,
        include: path.resolve(__dirname, 'node_modules/@apollo/client'),
        exclude: /@babel(?:\/|\\{1,2})runtime/,
        loader: require.resolve('babel-loader'),
        options: {
          babelrc: false,
          configFile: false,
          compact: false,
          presets: [[
            // Latest stable ECMAScript features
            '@babel/preset-env',
            {
              useBuiltIns: 'usage',
              corejs: '3.15',
              modules: false,
              // Exclude transforms that make all code slower
              exclude: ['transform-typeof-symbol'],
            },
          ]],
          // plugins: ['@babel/plugin-transform-runtime'],
        },
      },
      {
        test: /\.css$/i,
        use: [stylesHandler, 'css-loader', 'postcss-loader'],
      },
      {
        test: /\.less$/i,
        use: [stylesHandler, 'css-loader', 'postcss-loader', { loader: 'less-loader', options: { lessOptions: { javascriptEnabled: true } } }],
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
        type: 'asset',
      },

      // Add your rules for custom modules here
      // Learn more about loaders from https://webpack.js.org/loaders/
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
};

module.exports = (envs) => {
  const isAnalyse = !!envs.WEBPACK_ANALYSE;
  if (isProduction) {
    config.mode = 'production';
    config.optimization = {
      splitChunks: {
        chunks: 'all',
        cacheGroups: {
          defaultVendors: {
            enforce: true,
            test: /config/,
            name: 'config',
            chunks: 'initial',
          },
        },
      },
      minimizer: [
        new TerserPlugin({
          parallel: true,
          exclude: /config/,
        }),
      ],
    };
    config.plugins.push(new MiniCssExtractPlugin());
    config.plugins.push(new ContextReplacementPlugin(/moment[/\\]locale$/, /uk|zh-cn|en-gb/));
  } else {
    config.mode = 'development';
    // config.entry = ['./src/devEntry.tsx'];
    config.target = 'web';
  }
  if (isAnalyse) config.plugins.push(new BundleAnalyzerPlugin());
  return config;
};
