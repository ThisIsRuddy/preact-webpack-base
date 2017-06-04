const merge = require('webpack-merge');
const commonConfig = require('./webpack.common');
const path = require('path');
const webpack = require('webpack');
const glob = require('glob-all');

module.exports = merge.smart(commonConfig, {
  entry: {
    home: [
      'react-hot-loader/patch',
      'webpack-dev-server/client?http://0.0.0.0:8080',
      'webpack/hot/only-dev-server',
      './src/index.js']
  },
  devServer: {
    host: '0.0.0.0',
    port: 8080,
    hot: true,
    contentBase: [ path.resolve(__dirname, '../dist') ],
    publicPath: '/',
    compress: true, //gzip
    overlay: true,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
    }
  },
  watchOptions: { poll: 500 },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin()
  ]
});