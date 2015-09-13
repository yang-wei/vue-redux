var vue = require('vue-loader');

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
    extensions: ['', '.js', '.vue']
  },
  module: {
    loaders: [
      {
        test: /\.vue$/,
        loader: vue.withLoaders({
          js: 'babel?optional[]=runtime'
        })
      }, {
        test: /\.js$/,
        loader: 'babel-loader?blacklist[]=react'
      }
    ] 
  }
}
