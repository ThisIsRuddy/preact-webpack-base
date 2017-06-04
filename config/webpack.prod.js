const merge = require('webpack-merge');
const path = require('path');
const webpack = require('webpack');
const glob = require('glob-all');
const commonConfig = require('./webpack.common');
const CompressionPlugin = require('compression-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const PurifyCSSPlugin = require('purifycss-webpack');

module.exports = merge.smart(commonConfig, {
  entry: {
    home: [ './src/index.js' ]
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: '[name].bundle.js',
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader?modules"'
        })
      }
    ]
  },
  plugins: [
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false
    }),
    new ExtractTextPlugin({
      filename: 'styles.css',
      allChunks: false
    }),
    new PurifyCSSPlugin({
      paths: glob.sync([
        path.join(__dirname, '../dist/*.html'),
        path.join(__dirname, '../dist/*.js')
      ]),
      minimize: true,
      verbose: true
    }),
    new webpack.optimize.UglifyJsPlugin({
      beautify: false,
      mangle: {
        screw_ie8: true,
        keep_fnames: true
      },
      compress: {
        screw_ie8: true
      },
      comments: false
    }),
    new CompressionPlugin({
      asset: "[path].gz[query]",
      algorithm: "gzip",
      test: /\.(js|html)$/,
      threshold: 10240,
      minRatio: 0.8
    })
  ]
});