const path = require('path')
const webpack = require('webpack')

const PATHS = {
    app: path.join(__dirname, 'app'),
    build: path.join(__dirname, 'build')
}

module.exports = {

    devServer: {
        port: 8000,
        historyApiFallback: true
    },

    entry: {
        app: PATHS.app
    },

    output: {
        filename: 'bundle.js',
        publicPath: '/assets'
    },

    /* used for enzyme */
    externals: {
        'cheerio': 'window',
        'react/lib/ExecutionEnvironment': true,
        'react/lib/ReactContext': true,
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
