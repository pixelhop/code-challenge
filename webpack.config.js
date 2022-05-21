/* eslint-disable */
const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = (env) => {
    // use the --env.production switch to switch between development & production builds
    const isProduction = env.production === true;
    if (!isProduction) {
        console.warn('running in DEVELOPMENT mode');
    }

    const webPackConfig = {
        entry: './src/index.ts',
        devtool: isProduction ? undefined : 'inline-source-map',
        mode: isProduction ? 'production' : 'development',
        watch: isProduction ? false : true,
        module: {
            rules: [
                {
                    test: /\.ts$/,
                    use: 'ts-loader',
                    exclude: /node_modules/,
                },
                {
                    test: /\.css$/i,
                    use: [MiniCssExtractPlugin.loader, 'css-loader'],
                },
                {
                    test: /\.vue$/,
                    loader: 'vue-template-loader',
                },
            ],
        },
        resolve: {
            extensions: ['.ts', '.js'],
        },
        output: {
            filename: 'bundle.min.js',
            path: path.resolve('dist'),
        },
        plugins: [
            new MiniCssExtractPlugin(),
            new HtmlWebpackPlugin({
                title: 'Code Challenge',
                filename: 'index.html',
                template: 'src/index.html',
                inject: 'body',
                hash: true,
            }),
        ],
    };

    // setup terser plugin for production builds
    if (isProduction) {
        webPackConfig.optimization = {
            minimize: true,
            minimizer: [new TerserPlugin({ extractComments: false })],
        };
    }

    return webPackConfig;
};
