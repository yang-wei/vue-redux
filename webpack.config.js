var path = require('path');

module.exports = {
  entry: { 
    app: ['webpack/hot/dev-server', './src/index.js']
  },
  output: {
    path: __dirname,
    publicPath: '/dist/',
    filename: 'app.js'
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
