var webpack = require('webpack');

module.exports = {

    devServer: {
        port: 3000,
        historyApiFallback: true
    },

    entry: [
        './app/index.jsx'
    ],

    output: {
        filename: 'bundle.js',
        publicPath: '/assets'
    },

    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],

    module: {
        preLoaders: [
            {
                test: [/\.jsx?$/, /\.js?$/],
                loader: "eslint",
                include: /app/,
            },
        ],

        loaders: [
            {
                test: [/\.jsx?$/, /\.js?$/],
                loaders: ['react-hot', 'babel'],
                include: /app/
            },
        ]
    },

    resolve: {
        extensions: ['', '.js', '.jsx']
    }
}
