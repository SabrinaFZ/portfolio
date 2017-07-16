const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  devtool: 'eval',
  //entry point-> requires other modules (root)
  entry: [
    'webpack/hot/dev-server',
    'webpack-hot-middleware/client',
    './src/js/index.js'
  ],


  //ouput point->
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'app.js',
    publicPath: '/'
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
        loader: 'file-loader?name=/img/[name].[ext]'
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Portfolio',
      template: 'src/index.pug',
      favicon: './favicon.ico',
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ]

}
