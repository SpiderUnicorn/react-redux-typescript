const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')


const PATHS = {
    app: path.join(__dirname, 'src'),
    build: path.join(__dirname, 'build')
}

const common = {
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

let config;

switch(process.env.npm_lifecycle_event) {
    case 'build':
        config = merge(common, {});
        break;
    default:
        config = merge(common, {});
        break;
}

module.exports = config;
