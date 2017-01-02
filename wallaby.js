module.exports = function () {

    return {
        files: [
            'src/**/*.ts?(x)',
            '!src/**/*.spec.tsx'
        ],

        tests: [
            'src/**/*.spec.tsx'
        ],
        env: {
            
            type: 'node'
        },
        preprocessors: {
            '**/*.js': file => require('babel-core').transform(
                                     file.content,
                                     {sourceMap: true, presets: ['es2015', 'react']})
        }
    }
}

