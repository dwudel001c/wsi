var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './app/index.js',
    output : {
        path: path.resolve(__dirname, 'dist'),
        filename: 'apron-bundle.js'
    },
    module: {
        rules: [
            { test: /\.(js)$/, use: 'babel-loader' },
            { test: /\.css$/, use: ['style-loader', 'css-loader'] }
        ]
    },
    plugins: [new HtmlWebpackPlugin({
        template: 'app/index.html'
    })],
    resolve: {
        // Resolves JS modules/files imports without absolute/relative paths.
        modules: [
            // Search in 'node_modules' folders.
            'node_modules',
            // Search in the 'config' folder for config files.
            path.resolve(__dirname, 'config'),
            // Search in the 'components' folder.
            path.resolve(__dirname, 'app'),

            path.resolve(__dirname, 'test'),
            path.resolve(__dirname, 'test/mock')
        ]
    }
}