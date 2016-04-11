const path = require('path');
const root = path.join(__dirname, '..');
const context = path.join(root, 'app');
const publicPath = path.join(root, 'public');
const bundleDirName = 'bundles';
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const baseConfig = {
  entry: {
    app: ['./index']
  },
  context,
  resolve: {
    extensions: ['', '.react.js', '.js', '.jsx'],
    modulesDirectories: ['app', 'node_modules']
  },
  plugins: [
    new CleanWebpackPlugin([`${publicPath}/${bundleDirName}`], { root }),
    new HtmlWebpackPlugin({
      template: path.join(context, 'index.ejs'),
      filename: 'index.html',
      inject: false
    })
  ],
  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        loaders: ['babel'],
        include: context
      },
      { test: /\.png$/, loader: 'url-loader' },
      { test: /\.jpg$/, loader: 'file-loader' },
      { test: /\.json$/, loader: 'json-loader' },
      { test: /\.html$/, loader: 'html-loader' }
    ]
  },
  output: {
    path: publicPath,
    filename: `${bundleDirName}/[name].[chunkhash].js`,
    chunkFilename: `${bundleDirName}/[name].[chunkhash].js`
  }
};

module.exports = baseConfig;
