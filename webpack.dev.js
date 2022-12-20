let webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
let path = require('path');

module.exports = merge.smart(common, {
    entry: {
        'app': [
            'webpack-dev-server/client?http://localhost:8080', // Elige un puerto local a desplegar
            'webpack/hot/only-dev-server', 
            'bootstrap-loader',
            './index.jsx',
        ],
        'visor': path.join(__dirname, '/_visor/containers/VisorApp.jsx'),
    },
    output: {
        path: path.join(__dirname, '/dist'),
        publicPath: '/', // Genera urls para imagenes
        filename: '[name]-bundle.js',
    },
    devtool: 'cheap-module-eval-source-map',
    watch: true,
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.LoaderOptionsPlugin({
            debug: true,
        }),
    ],
    devServer: {
        contentBase: path.join(__dirname, '/dist'),
        hot: true,
        inline: true,
        port: 8080,
        headers: {
            'Access-Control-Allow-Origin': '*',
        },
    },
});