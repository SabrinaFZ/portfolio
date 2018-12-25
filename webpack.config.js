const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpack = require('webpack');

module.exports = {
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.pug$/,
                use: [
                    {
                        loader: 'html-loader',
                        options: {
                            minimize: true
                        }
                    },
                    {
                        loader: 'pug-html-loader'
                    }
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: { sourceMap: true}
                    },
                    {
                        loader: 'sass-loader',
                        options: { sourceMap: false }
                    }
                ]
            },
            {
                test: /\.(png|svg|ico|jpg|gif)(\?.*)?$/,
                loader: 'file-loader',
                query: {
                    name: 'assets/img/[name].[ext]'
                }
            },
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                loader: 'file-loader',
                query: {
                    name: 'assets/fonts/[name].[ext]'
                }
            },
            {
                test: /bootstrap\/dist\/js\/umd\//, 
                loader: 'imports?jQuery=jquery'
            }
        ]
    },

    plugins: [
        new HtmlWebPackPlugin({
            template: './src/index.pug',
            filename: './index.html',
            title: 'Portfolio'
        }),
        new MiniCssExtractPlugin({
            filename: "[name].css",
            chunkFilename: "[id].css"
        }),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery'
        })
    ]
}