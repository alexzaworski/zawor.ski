const path = require('path');

module.exports = {
  entry: './src/js/main.js',
  output: {
    path: path.resolve(__dirname, './docs/js'),
      filename: 'main.js',
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015'],
        },
      },
    ],
  },
};