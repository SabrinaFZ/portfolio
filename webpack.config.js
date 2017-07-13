const path = require('path')
var HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {

  //entry point-> requires other modules (root)
  entry: {
    app:'./src/js/index.js'
  },

  //ouput point->
  output: {
    path: path.resolve('./dist'),
    filename: '[name].js'
  },

  module:{
    loaders:[
      {
        test:/\.js$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        query:{
          presets:['react','es2015']
        }
      },
      {
        test:/\.scss$/,
        loader: 'style-loader!css-loader!sass-loader'
      },
      {
        test:/\.pug$/,
        loader: 'html-loader!pug-html-loader'
      },
      {
        test: /\.(png|svg|ico|jpg|gif)$/,
        loader: 'file-loader'
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Portfolio',
      template: 'src/index.pug',
      favicon: './favicon.ico',
    })
  ]

}
