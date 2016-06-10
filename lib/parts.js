const webpack = require('webpack');

/* Settings for webpack-dev-server */
exports.devServer = function(options) {
    return {
        devServer: {
            // Enable HTML5 history api based routing
            historyApiFallback: true,

            // Enable hot reloading
            hot: true,
            inline: true,

            // Reduce output by only displaying errors
            stats: 'errors-only',

            // Read host and port from env.
            host: options.host, // Default 'localhost'
            port: options.port // Default 8080
        },

        plugins: [
            new webpack.HotModuleReplacementPlugin({
                // Enable multi-pass compilation.
                // Good for performance in large projects
                multiStep: true
            })
        ],
    }
}

/* CSS loading for both prod and dev */
exports.setupCSS = function(paths) {
    return {
        module: {
            loaders: [
                {
                    test: /\.css$/,
                    loaders: ['style', 'css'],
                    include: paths
                }
            ]
        }
    };
}


/* Minification for production */
exports.minify = function() {
    return {
        plugins: [
            new webpack.optimize.UglifyJsPlugin({
                compress: {
                    warnings: false
                }
            })
        ]
    };
}

/* set variables for build */
exports.setFreeVariable = function(key, value) {
    const env = {};
    env[key] = JSON.stringify(value);

    return {
        plugins: [
            new webpack.DefinePlugin(env)
        ]
    };
}
