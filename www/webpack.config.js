const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const isProduction = process.env.NODE_ENV === 'production';

module.exports = {
    entry: './src/bootstrap.js',
    output: {
        filename: isProduction ? '[name].[contenthash].js' : '[name].js',
        path: path.resolve(__dirname, 'dist'),
        clean: true, // Clean the output directory before emit
    },
    mode: isProduction ? 'production' : 'development',
    devtool: isProduction ? 'source-map' : 'inline-source-map',
    devServer: {
        static: './dist',
        port: 3000,
        open: false,
        hot: true,
    },
    module: {
        rules: [
            // JavaScript Loader
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: 'babel-loader',
            },
            // CSS Loader
            {
                test: /\.css$/i,
                use: [
                    isProduction ? MiniCssExtractPlugin.loader : 'style-loader',
                    'css-loader',
                    'postcss-loader', // Optional
                ],
            },
            // Sass Loader (Optional)
            {
                test: /\.s[ac]ss$/i,
                use: [
                    isProduction ? MiniCssExtractPlugin.loader : 'style-loader',
                    'css-loader',
                    'postcss-loader', // Optional
                    'sass-loader',
                ],
            },
            // Asset Modules for Images
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
            // Asset Modules for Fonts
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.wasm$/,
                type: 'webassembly/async',
            },
        ],
    },
    experiments: {
        asyncWebAssembly: true,
        syncWebAssembly: true
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            inject: 'body',
            favicon: './src/assets/favicon.ico',
            minify: isProduction ? {
                collapseWhitespace: true,
                removeComments: true,
            } : false,
        }),
        ...(isProduction ? [new MiniCssExtractPlugin({
            filename: '[name].[contenthash].css',
        })] : []),
    ],
};
