const path = require('path');
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackTemplate = require('html-webpack-template');

/* Split the configuration to extract common behaviour for all
 * configurations and merge it with build / prod config */
const merge = require('webpack-merge');

/* Partial configuration to include */
const parts = require('./lib/parts');

/* get config to pull vendor dependencies
 * for splitting the bundle into appropriate
 * chunks */
const manifest = require('./package.json');

const PATHS = {
    app: path.join(__dirname, 'src'),
    style: path.join(__dirname, 'src', 'index.css'),
    build: path.join(__dirname, 'build')
}

const common = {
    entry: {
        style: PATHS.style,
        app: PATHS.app
    },

    output: {
        path: PATHS.build,
        filename: '[name].js'
    },

    module: {
        rules: [
            {
                /** Linting for TypeScript
                 * 
                 * Using enforce: 'pre' makes sure linting is run as a pre-step.
                 * Previously known as a pre-loader in webpack 1.
                 */
                enforce: 'pre',
                test: [/\.tsx$/, /\.ts$/],
                use: 'tslint-loader'
            },
            {
                /** Load typescript through ts-loader and babel
                 * 
                 * Babel transpilation is cached. Source files with the same checksum
                 * won't be retranspiled.
                 */
                test: /\.tsx?$/,
                use: ['babel-loader?cacheDirectory', 'ts-loader'],
                include: PATHS.app
            },

            // boostrap
            {test: /\.eot(\?v=\d+.\d+.\d+)?$/, use: 'file-loader'},
            {test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, use: 'url-loader?limit=10000&mimetype=application/font-woff'},
            {test: /\.[ot]tf(\?v=\d+.\d+.\d+)?$/, use: 'url-loader?limit=10000&mimetype=application/octet-stream'},
            {test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, use: 'url-loader?limit=10000&mimetype=image/svg+xml'},
            {test: /\.(jpe?g|png|gif)$/i, use: 'file-loader?name=[name].[ext]'},
            {test: /\.ico$/, use: 'file-loader?name=[name].[ext]'},
            {test: /(\.css|\.scss)$/, use: ['style-loader', 'css-loader?sourceMap', 'postcss-loader', 'sass-loader?sourceMap']}
        ]
    },

    plugins: [
        // Let webpack generate HTML, completely removing the need of an index.html
        new HtmlWebpackPlugin({
            title: 'React Redux TypeScript example',
            template: HtmlWebpackTemplate,
            appMountId: 'app',
            // Meta tag for scaling
            mobile: true, 
            // html-webpack-template takes care of asset injection. Leave as false 
            inject: false 
        }),

        /** Emit module paths instead of webpack generated numbers to identify modules easier. 
         * Useful for debugging, and makes more readable output in general, though verbose. 
         */
        new webpack.NamedModulesPlugin()

    ],

    resolve: {
        modules: [ 
             // to resolve modules loaded by absolute path eg: components/component
            path.resolve('./src'),
            'node_modules' 
        ],
        extensions: ['.js', '.jsx', '.ts', '.tsx']
    },

    performance: {
        // hints: false
    },

    devServer: {
        historyApiFallback: true,
        inline: true,
        hot: true
    }
}

let config

/* Branch config based on NPM run command */
// TODO: currently disabled
switch(process.env.npm_lifecycle_event) {
case 'build':
// fallthrough. generate stats for the build config
case 'stats':
    config = merge(
        common,
        {
            devtool: 'source-map',
            output: {
                path: PATHS.build,
                filename: '[name].[chunkhash].js',
                // This is used for require.ensure. The setup
                // will work without but this is useful to set.
                chunkFilename: '[chunkhash].js'
            },
            node: {
                fs: "empty"
            }
        },
        parts.setFreeVariable(
            'process.env.NODE_ENV',
            'production'
        ),
        parts.extractBundle({
            name: 'vendor',
            entries: Object.keys(manifest.dependencies)
        }),
        parts.minify(),
        parts.extractCSS(PATHS.style)
    )
    break
default:
    config = merge(
        common,
        {
            devtool: 'eval-source-map'
        },
        parts.devServer({
            // Read host and port from env
            host: process.env.HOST,
            port: process.env.PORT
        })

    );
}

/** Webpack 2 can receive the node environment as an argument.
 * This makes for easy splitting of the configuration based on 
 * the environment. 
 */
module.exports = function(env) {
    return merge(common);
};