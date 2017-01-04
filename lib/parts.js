const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

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
exports.setupCSS = function() {
    return {
        module: {
            loaders: [
                    // loaders for css/bootstrap
                    {test: /\.eot(\?v=\d+.\d+.\d+)?$/, loader: 'file-loader'},
                    {test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: 'url-loader?limit=10000&mimetype=application/font-woff'},
                    {test: /\.[ot]tf(\?v=\d+.\d+.\d+)?$/, loader: 'url-loader?limit=10000&mimetype=application/octet-stream'},
                    {test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url-loader?limit=10000&mimetype=image/svg+xml'},
                    {test: /\.(jpe?g|png|gif)$/i, loader: 'file-loader?name=[name].[ext]'},
                    {test: /\.ico$/, loader: 'file-loader?name=[name].[ext]'},
                    {test: /(\.css|\.scss)$/, loaders: ['style-loader', 'css-loader?sourceMap', 'postcss-loader', 'sass-loader?sourceMap']}
            ]
        }
    }
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
    }
}

/* set variables for build */
exports.setFreeVariable = function(key, value) {
    const env = {}
    env[key] = JSON.stringify(value)

    return {
        plugins: [
            new webpack.DefinePlugin(env)
        ]
    }
}

/* commons chunk plugin */
exports.extractBundle = function(options) {
    const entry = {}
    entry[options.name] = options.entries

    return {
        // Define an entry point needed for splitting.
        entry: entry,
        plugins: [
            // Extract bundle and manifest files. Manifest is
            // needed for reliable caching.
            new webpack.optimize.CommonsChunkPlugin({
                names: [options.name, 'manifest'],

                // options.name modules only
                minChunks: Infinity
            })
        ]
    }
}

/* CSS is inlined with the JS in the bundle
 * This plugin pulls the css into it's own file */
exports.extractCSS = function(paths) {
    return {
        module: {
            loaders: [
                // Extract CSS during build
                {
                    test: /\.css$/,
                    loader: ExtractTextPlugin.extract('style', 'css'),
                    include: paths
                }
            ]
        },
        plugins: [
            // Output extracted CSS to a file
            new ExtractTextPlugin('[name].[chunkhash].css')
        ]
    }
}

