const path = require('path');
module.exports = {
  entry: './src/App.js',
  output: {
    path: path.resolve('dist'),
    filename: 'client.js'
  },

  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/ }
    ]
  }
}