module.exports = {
  entry: './src/js/main.js',
  output: {
      path: './docs/js',
      filename: 'main.js'
  },
  module: {
    loaders: [
      {
        test: /\.js?$/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015']
        }
      }
    ]
  }
};