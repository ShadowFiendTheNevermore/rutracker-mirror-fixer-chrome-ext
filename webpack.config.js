module.exports = {
    entry: {
        popup: './src/popup',
        content: './src/content_scripts',
        background: './src/background'
    },
    module: {
        loaders: [
            {test: /\.js$/, exclude: '/node_modules/', loader: 'babel?presets[]=es2015'},
        ]
    },
    output: {
        filename: "[name].js",
        path: "./dist",
    }
}