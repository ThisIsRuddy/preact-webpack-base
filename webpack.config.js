const path = require('path');
const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
module.exports = {
  entry: './src/App.js',
  output: {
    path: path.resolve('dist'),
    filename: 'client.js'
  },
  resolve: {
    alias: {
      "react": "preact",
      "react-dom": "preact"
    }
  },
  plugins: [
    new CopyWebpackPlugin([
      { from: 'node_modules/semantic-ui-css/semantic.min.css', to: 'semantic.min.css' },
    ]),
    new webpack.optimize.UglifyJsPlugin(),
    new CompressionPlugin({
      asset: "[path].gz[query]",
      algorithm: "gzip",
      test: /\.(js|html)$/,
      threshold: 10240,
      minRatio: 0.8
    }),
    new BundleAnalyzerPlugin({
      analyzerMode: 'server',
      analyzerHost: '127.0.0.1',
      analyzerPort: 8888,
      reportFilename: 'report.html',
      defaultSizes: 'parsed',
      openAnalyzer: true,
      generateStatsFile: false,
      statsFilename: 'stats.json',
      statsOptions: null,
      logLevel: 'info'
    })
  ],
  module: {
    loaders: [
      {test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/},
      {test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/}
    ]
  }
}