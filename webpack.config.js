var path = require('path');

module.exports = {
  devtool: 'eval',
  entry: { 
    app: ['webpack/hot/dev-server', './src/index.js']
  },
  output: {
    path: __dirname,
    publicPath: '/dist/',
    filename: 'app.js'
  },
  resolve: {
    extensions: ['', '.js']
  },
  module: {
    loaders: [
      { 
        test: path.join(__dirname, 'src'), 
        loader: 'babel-loader' 
      } 
    ] 
  }
}
