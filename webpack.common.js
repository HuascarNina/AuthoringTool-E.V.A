let webpack = require('webpack');
let ZipBundlePlugin = require('./webpack_plugins/bundle_zip_plugin.js');
let dependency_loader = require('./webpack_plugins/dependencies_loader.js');
let path = require('path');
let ProgressBarPlugin = require('progress-bar-webpack-plugin');

module.exports = {
    node: {
        fs: 'empty',
    },
    module: {
        rules: [
            {
                enforce: 'pre',
                test: /\.(es6|jsx|js)$/,
                use: ['eslint-loader'],
                exclude: [/node_modules/],
            },
            {
                test: /pdf\.worker(\.min)?\.js$/,
                use: 'raw-loader',
            },
            {
                test: /\.es6$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['es2015'],
                        plugins: [require('babel-plugin-transform-object-rest-spread')],
                    },
                },
            },
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['es2015', 'react'],
                    },
                },
            },
            {
                test: /\.css$/,
                use: [
                    "style-loader",
                    "css-loader",
                    "postcss-loader",
                ],
            },
            {
                test: /\.(scss|sass)$/,
                exclude: /(node_modules|bower_components)/,
                use: [
                    'style-loader',
                    'css-loader',
                    { loader: 'sass-loader', options: { sourceMap: true } },
                ],
            },
            {
                test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2|json|xml|ico)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 1000000,
                        },
                    },
                ],
            },
            {
                test: require.resolve('jquery'),
                use: [{
                    loader: 'expose-loader',
                    options: '$',
                }],
            }, {
                test: /\.ejs$/,
                use: [{
                    loader: 'ejs-compiled-loader',
                }],
            },
        ].concat(dependency_loader.getExposeString()),
    },
    resolve: {
        // resolve.alias podría ser útil para resolver ciertos módulos fácilmente
        extensions: ['.js', '.jsx', '.es6'],
    },

    plugins: [
        new ProgressBarPlugin({}),
        new webpack.ContextReplacementPlugin(/package\.json$/, "./plugins/"),
        new webpack.ProvidePlugin(Object.assign({
            '$': 'jquery',
            'jQuery': 'jquery',
            'window.jQuery': 'jquery',
        }, dependency_loader.getPluginProvider())), // Envuelve el módulo con variable e inyecta donde sea necesario
        new ZipBundlePlugin(), // Compilar automáticamente zips
        new webpack.NormalModuleReplacementPlugin(
            /pdf\.worker(\.min)?\.js$/,
            path.join(__dirname, 'node_modules', 'pdfjs-dist', 'build', 'pdf.worker.min.js')),
    ],
};