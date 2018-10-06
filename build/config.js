const path = require('path');

module.exports = {

    assetsPublicPath: '/',
    assetsSubDirectory: 'static',
    productionGzipExtensions: ['js', 'css'],

    development: {
        port: 4000,
        srcRoot: path.resolve(__dirname, '../src'),
        index: path.resolve(__dirname, '../src/index.html'),
        assetsVirtualRoot: path.posix.join('/', 'static'),
        rootDirectory: 'dist/dist-dev',
        assetsDirectory: 'dist/dist-dev/dist',
        assetsRoot: path.resolve(__dirname, '../dist/dist-dev/dist'),
        proxyTable: {
            '/dpe': 'http://localhost:4100'
        }
    },

    demo: {
        port: 4001,
        index: path.resolve(__dirname, '../dist/dist-demo/dist/index.html'),
        rootDirectory: 'dist/dist-demo',
        assetsDirectory: 'dist/dist-demo/dist',
        assetsRoot: path.resolve(__dirname, '../dist/dist-demo/dist'),
        proxyTable: {
            '/dpe': 'http://localhost:4100'
        }
    },

    production: {
        port: 4002,
        index: path.resolve(__dirname, '../dist/dist-prod/dist/index.html'),
        rootDirectory: 'dist/dist-prod',
        assetsDirectory: 'dist/dist-prod/dist',
        assetsRoot: path.resolve(__dirname, '../dist/dist-prod/dist'),
        proxyTable: {
            '/dpe': 'http://localhost:4100'
        }
    }

};
