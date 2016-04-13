const path = require('path');
const root = path.join(__dirname, '..');
const context = path.join(root, 'app');
const publicPath = path.join(root, 'public');
const bundlePath = path.join(publicPath, 'bundles');
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');

const loaders = [
  {
    test: /\.(js|jsx)$/,
    loaders: ['babel'],
    include: context
  },
  { test: /\.png$/, loader: 'url-loader' },
  { test: /\.jpg$/, loader: 'file-loader' },
  { test: /\.json$/, loader: 'json-loader' },
  { test: /\.html$/, loader: 'html-loader' }
];

const resolve = {
  extensions: ['', '.react.js', '.js', '.jsx', '.css'],
  modulesDirectories: ['app', 'node_modules']
};

const baseConfig = [{
  devtool: 'source-map',
  entry: {
    app: ['./iso-client']
  },
  context,
  resolve,
  plugins: [
    new ExtractTextWebpackPlugin('styles.css')
  ],
  module: {
    loaders: loaders.concat({
      test: /\.css$/,
      loader: ExtractTextWebpackPlugin.extract('style-loader', 'css-loader?module&localIdentName=[name]__[local]___[hash:base64:5]&sourceMap!postcss-loader')
    })
  },
  postcss: function () {
    return [require('autoprefixer')(), require('precss')()];
  },
  output: {
    path: bundlePath,
    publicPath: 'bundles/',
    filename: `[name].js`,
    chunkFilename: `[name].js`
  }
},
{
  entry: {
    server: ['./iso-server']
  },
  target: "node",
  context,
  resolve,
  module: {
    loaders: loaders.concat({
       test: /\.css$/,
       loader: 'css/locals?module&localIdentName=[name]__[local]___[hash:base64:5]'
    })
  },
  output: {
    path: bundlePath,
    publicPath: 'bundles/',
    filename: `[name].js`,
    chunkFilename: `[name].js`,
    libraryTarget: 'commonjs2'
  }
}];

module.exports = baseConfig;
