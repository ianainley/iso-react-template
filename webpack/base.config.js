const path = require('path');
const root = path.join(__dirname, '..');
const context = path.join(root, 'app');
const publicPath = path.join(root, 'public');
const bundlePath = path.join(publicPath, 'bundles');

const loaders = [
  {
    test: /\.(js|jsx)$/,
    loader: 'babel',
    include: context,
    query: {
      compact: false
    }
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

const entryClient = {
  app: ['./iso-client']
};

const entryServer = {
  server: ['./iso-server']
};

const output = {
  path: bundlePath,
  publicPath: 'bundles/',
  filename: `[name].js`,
  chunkFilename: `[name].js`
};

function postCssConfig() {
  return [
    require('autoprefixer')(),
    require('precss')()
  ];
}

module.exports = {
  publicPath,
  bundlePath,
  context,
  loaders,
  resolve,
  entryClient,
  entryServer,
  output,
  postCssConfig
};
