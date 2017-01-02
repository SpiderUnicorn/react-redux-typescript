const path = require('path')

/* Let webpack generate HTML to easily include bundles */
const HtmlWebpackPlugin = require('html-webpack-plugin')

/* Split the configuration to extract common behaviour for all
 * configurations and merge it with build / prod config */
const merge = require('webpack-merge')

/* validates webpack config against a schema and reports errors
 * see the module.exports at the bottom of the page */
const validate = require('webpack-validator')

/* Partial configuration to include */
const parts = require('./lib/parts')

/* get config to pull vendor dependencies
 * for splitting the bundle into appropriate
 * chunks */
const manifest = require('./package.json')

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
        preLoaders: [
            {
                test: [/\.tsx$/, /\.ts$/],
                loader: 'tslint-loader',
                include: PATHS.app
            }
        ],

        loaders: [
            // loader for regular react
            {
                test: [/\.jsx?$/, /\.js?$/],
                // cache babel tranpilation for increased performance during development
                loaders: ['react-hot', 'babel?cacheDirectory'],
                include: PATHS.app
            },
            // loader for typescript-tsx
            {
                test: /\.tsx?$/,
                loaders: ['react-hot','babel?cacheDirectory', 'ts?jsx=true'],
                exclude: /node_modules/
            },
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({
            title: 'React redux typescript',
            template: 'src/index.ejs'
        })
    ],

    resolve: {
        // to resolve modules loaded by absolute path eg: components/component
        root: path.resolve('./src'),
        extensions: ['', '.js', '.jsx', '.ts', '.tsx']
    }
}

let config

/* Branch config based on NPM run command */
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
        parts.setupCSS(),
        parts.devServer({
            // Read host and port from env
            host: process.env.HOST,
            port: process.env.PORT
        })
    )
}

module.exports = validate(config)
