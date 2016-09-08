var webpack = require('webpack');
var minify = process.argv.indexOf('--minify') !== -1
var pluginList = []

if (minify) {
    pluginList.push(new webpack.optimize.UglifyJsPlugin())
}

module.exports = {
    entry: {
        background: './src/background',
        content: './src/content'
    },
    module: {
        loaders: [
            {test: /\.js$/, exclude: '/node_modules/', loader: 'babel?presets[]=es2015'},
        ]
    },
    output: {
        filename: "[name].js",
        path: "./dist",
    },
    plugins: pluginList
}