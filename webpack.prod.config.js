const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  devtool: 'source-map',

  entry: {
    app:'./src/js/index.js'
  },

  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'app.js',
    publicPath: ' https://portfolio-sabrina.herokuapp.com/'
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: 'Portfolio',
      template: 'src/index.pug',
      favicon: './favicon.ico',
    }),
    new webpack.optimize.UglifyJsPlugin({
      minimize: true,
      compress: {
        warnings: false
      }
    }),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    })
  ],

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
        loader: 'file-loader?name=/img/[name].[ext]'
      }
    ]
  },
}
