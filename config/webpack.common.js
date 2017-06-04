const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  context: path.resolve(__dirname, '../'),
  resolve: {
    alias: {
      'preact-compat': 'preact-compat/dist/preact-compat',
      "react": "preact-compat",
      "react-dom": "preact-compat"
    }
  },
  module: {
    rules: [
      { test: /\.js$/, use: ['babel-loader'], exclude: /node_modules/ },
      { test: /\.svg$/, use: 'url-loader?limit=65000&mimetype=image/svg+xml&name=fonts/[name].[ext]'},
      { test: /\.woff$/, use: 'url-loader?limit=65000&mimetype=application/font-woff&name=fonts/[name].[ext]'},
      { test: /\.woff2$/, use: 'url-loader?limit=65000&mimetype=application/font-woff2&name=fonts/[name].[ext]'},
      { test: /\.[ot]tf$/, use: 'url-loader?limit=65000&mimetype=application/octet-stream&name=fonts/[name].[ext]'},
      { test: /\.eot$/, use: 'url-loader?limit=65000&mimetype=application/vnd.ms-fontobject&name=fonts/[name].[ext]'},
      { test: /\.(jpe?g|png|gif|svg)$/i, use: [ 'file-loader?&name=img/[hash].[ext]' ] },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({filename: 'index.html', template: 'src/index.html'}),
  ]
};