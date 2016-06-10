const webpack = require('webpack');

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
