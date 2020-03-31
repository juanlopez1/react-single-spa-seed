const dotenv = require('dotenv');
const path = require('path');
const webpack = require('webpack');
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const SriPlugin = require('webpack-subresource-integrity');
const TerserPlugin = require('terser-webpack-plugin');

const packageJson = require('./package.json');

dotenv.config({path: '.env.prod'});

const {NODE_ENV} = process.env;

module.exports = {
    mode: 'production',
    entry: {
        app: [
            'core-js/stable',
            path.resolve('src', 'index.js')
        ]
    },
    output: {
        publicPath: '/assets/',
        filename: '[name].bundle.js',
        crossOriginLoading: 'anonymous'
    },
    module: {
        rules: [{
            test: /\.js$/,
            include: path.resolve(__dirname, 'node_modules', 'single-spa'),
            loader: 'babel-loader',
            options: {
                extends: './babel.config.js'
            }
        }, {
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader'
        }, {
            test: /\.s?css$/,
            use: [
                'style-loader', MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'
            ]
        }, {
            test: /\.css$/,
            use: [
                'style-loader', 'css-loader'
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
        },
        minimize: true,
        minimizer: [
            new TerserPlugin({}), new OptimizeCSSAssetsPlugin({})
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(NODE_ENV),
            VERSION: JSON.stringify(packageJson.version)
        }),
        new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
        new CaseSensitivePathsPlugin(),
        new MiniCssExtractPlugin({
            filename: '[name].bundle.css',
            chunkFilename: '[id].bundle.css'
        }),
        new SriPlugin({
            hashFuncNames: ['sha256', 'sha384'],
            enabled: true
        }),
        new HtmlWebpackPlugin({
            template: path.resolve('public', 'index.html'),
            hash: true
        })
    ],
    node: {
        fs: 'empty',
        net: 'empty',
        tls: 'empty'
    }
};
