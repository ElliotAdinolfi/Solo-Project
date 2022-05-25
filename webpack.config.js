const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: [ './client/index.js' ],
    output: {
        filename: 'index_bundle.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/'
    },
    plugins: [new HtmlWebpackPlugin({
        template: './client/index.html'
    })],
    module: {
        rules: [
            {
            test: /\.jsx?/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/env', '@babel/react'],
                }
            },
        },
        {
            test: /\.s?css/,
            exclude: /node_modules/,
            use: [ 'style-loader', 'css-loader']
        }
    ],
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    devServer: {
        host: 'localhost',
        static: {
            directory: path.join(__dirname, './dist/index.html')
        },
        open: true,
        hot: true,
        compress: true,
        port: 8080,
        historyApiFallback: true,
        proxy: {
            '/api/': 'http://localhost:3000/'
        }
    },
}