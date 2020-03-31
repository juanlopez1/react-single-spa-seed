const path = require('path');
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpack = require('webpack');

const packageJson = require('./package.json');

const {NODE_ENV, PORT} = process.env;

module.exports = {
    mode: NODE_ENV,
    devtool: 'cheap-module-source-map',
    devServer: {
        disableHostCheck: true,
        contentBase: path.join(__dirname, 'public'),
        historyApiFallback: true,
        hot: true,
        inline: true,
        open: true,
        port: PORT,
        progress: true,
        overlay: true
    },
    entry: {
        app: [
            'webpack/hot/only-dev-server',
            'core-js/stable',
            'regenerator-runtime/runtime',
            path.resolve('src', 'index.js')
        ]
    },
    output: {
        path: path.join(__dirname, 'public'),
        publicPath: '/'
    },
    module: {
        rules: [{
            test: /\.js$/,
            include: path.resolve(__dirname, 'node_modules', 'single-spa'),
            loader: 'babel-loader',
            options: {
                extends: './babel.config.js',
                cacheDirectory: '.babel-cache'
            }
        }, {
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            options: {
                plugins: ['react-hot-loader/babel'],
                cacheDirectory: '.babel-cache'
            }
        }, {
            test: /\.s?css$/,
            use: [
                'css-hot-loader', MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'
            ]
        }, {
            test: /\.css$/,
            use: [
                'css-hot-loader', 'style-loader', 'css-loader'
            ]
        }, {
            exclude: [
                /\.html$/,
                /\.(js|jsx)$/,
                /\.json$/,
                /\.s?css$/,
                /\.(jpg|png)/
            ],
            loader: 'url-loader',
            options: {
                name: '[name].[ext]',
                limit: 10000
            }
        }, {
            test: /\.(jpg|png)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
            loader: 'file-loader',
            options: {
                name: '[name].[ext]'
            }
        }]
    },
    optimization: {
        splitChunks: {
            chunks: 'all'
        }
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(NODE_ENV),
            VERSION: JSON.stringify(packageJson.version)
        }),
        new HtmlWebpackPlugin({
            template: path.resolve('public', 'index.html'),
            hash: true
        }),
        new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
        new webpack.HotModuleReplacementPlugin(),
        new CaseSensitivePathsPlugin(),
        new FriendlyErrorsWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: '[name].css'
        })
    ],
    node: {
        fs: 'empty',
        net: 'empty',
        tls: 'empty'
    }
};
