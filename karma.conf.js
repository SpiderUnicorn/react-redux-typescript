var webpack = require('webpack');

module.exports = function (config) {

    config.set({
        browsers: [ 'Chrome' ], //run in Chrome
        singleRun: true, //just run once by default
        frameworks: [ 'chai', 'mocha' ], //use the mocha test framework
        files: [
            'tests.webpack.js' //just load this file
        ],
        plugins: [
            'karma-chrome-launcher',
            'karma-phantomjs-launcher',
            'karma-chai',
            'karma-mocha',
            'karma-sourcemap-loader',
            'karma-webpack',
        ],
        preprocessors: {
            'tests.webpack.js': [ 'webpack', 'sourcemap' ] //preprocess with webpack and our sourcemap loader
        },
        reporters: [ 'dots' ], //report results in this format
        webpack: { //kind of a copy of your webpack config
            devtool: 'inline-source-map', //just do inline source maps instead of the default
            module: {
                loaders: [
                    {
                        test: /\.jsx?$/,
                        loader: 'babel-loader',
                        query: {
                            presets: ['airbnb']
                        }
                    }
                ]
            },

            resolve: {
                extensions: ['', '.js', '.jsx']
            },

            /* For enzyme */
            externals: {
                'cheerio': 'window',
                'react/addons': true,
                'react/lib/ExecutionEnvironment': true,
                'react/lib/ReactContext': true
            }
        },
        webpackMiddleware: {
            noInfo: true,
        }
    });
};
