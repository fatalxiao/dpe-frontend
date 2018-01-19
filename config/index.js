const path = require('path');

module.exports = {

    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    productionGzipExtensions: ['js', 'css'],

    dev: {
        env: require('./dev.env'),
        port: 4000,
        autoOpenBrowser: true,
        srcRoot: path.resolve(__dirname, '../src'),
        index: path.resolve(__dirname, '../src/index.html'),
        assetsVirtualRoot: path.posix.join('/', 'static'),
        proxyTable: {
            '/dpe': 'http://localhost:4100'
        }
    },

    prod: {

        env: require('./prod.env'),
        port: 4001,
        index: path.resolve(__dirname, '../dist/dist-prod/dist/index.html'),
        assetsRoot: path.resolve(__dirname, '../dist/dist-prod/dist'),
        proxyTable: {
            '/dpe': 'http://localhost:4100'
        }

    }

};