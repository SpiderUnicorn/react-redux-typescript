const path = require('path')
const webpack = require('webpack')

/* Split the configuration to extract common behaviour for all
 * configurations and merge it with build / prod config */
const merge = require('webpack-merge')

/* validates webpack config against a schema and reports errors
 * see the module.exports at the bottom of the page */
const validate = require('webpack-validator');

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
    },
    // generate source maps for easier debugging
    devtool: 'eval-source-map',

    entry: {
        app: PATHS.app
    },

    output: {
        filename: 'bundle.js',
        publicPath: '/assets/'
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

module.exports = validate(config);
