const webpack = require('webpack');
const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const extractSass = new ExtractTextPlugin({
  filename: 'style.css',
  allChunks: true,
});

let plugins = [
  extractSass,
];

let devtool;

const productionPlugins = [
  new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
  }),
  new CopyWebpackPlugin([{
    from: './index.html',
    to: 'index.html',
  }]),
  new webpack.optimize.UglifyJsPlugin({
    compress: {
      warnings: false,
    },
    mangle: true,
    sourcemap: false,
    beautify: false,
    dead_code: true,
  }),
];

if (process.env.NODE_ENV === 'production') {
  plugins = plugins.concat(productionPlugins);
  devtool = undefined;
}

module.exports = {
  entry: {
    app: path.join(__dirname, 'src', 'app-client.js'),
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  devtool,
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /(node-modules|disposables)/,
      loader: ['babel-loader'],
    }, {
      test: /\.scss$/,
      use: extractSass.extract({
        use: [{
          loader: 'css-loader',
        }, {
          loader: 'sass-loader',
        }],
        // use style-loader in development
        fallback: 'style-loader',
      }),
    }],
  },
  plugins,
};
