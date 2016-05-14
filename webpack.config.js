const path = require('path')
const webpack = require('webpack')


const PATHS = {
    app: path.join(__dirname, 'app'),
    build: path.join(__dirname, 'build')
}

module.exports = {

    devServer: {
        port: 8000,
        historyApiFallback: true,
        hot: true,
        inline: true,
        progress: true,
        devtool: 'eval-source-map',
        stats: 'errors-only'
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
                include: PATHS.app
            },
        ],

        loaders: [
            {
                test: [/\.jsx?$/, /\.js?$/],
                // cache babel tranpilation for increased performance during development
                loaders: ['react-hot', 'babel?cacheDirectory'],
                include: PATHS.app
            },
        ]
    },

    resolve: {
        extensions: ['', '.js', '.jsx']
    }
}
