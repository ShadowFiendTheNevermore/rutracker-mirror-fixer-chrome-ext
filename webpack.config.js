module.exports = {
    entry: {
        popup: './src/popup',
        content: './src/content_scripts',
        background: './src/background'
    },
    module: {
        loaders: [
            {test: /\.js$/, exclude: '/node_modules/', loader: 'babel?presets[]=es2015'},
            {test: /\.scss$/, loader: 'style!css!sass!'},
            {test: /\.twig$/, loader: 'twig-loader'}
        ]
    },
    output: {
        filename: "[name].js",
        path: "./dist",
    }
}