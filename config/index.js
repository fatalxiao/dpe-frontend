const path = require('path');

module.exports = {

    productionGzipExtensions: ['js', 'css'],

    dev: {

        env: require('./dev.env'),
        port: 4000,
        srcRoot: path.resolve(__dirname, '../src'),
        index: path.resolve(__dirname, '../src/index.html'),
        assetsSubDirectory: 'static',
        assetsPublicPath: '/',
        assetsVirtualRoot: path.posix.join('/', 'static'),
        proxyTable: {
            '/dpe': 'http://localhost:4100'
        },
        cssSourceMap: false

    },

    build: {

        env: require('./prod.env'),
        index: path.resolve(__dirname, '../docs/index.html'),
        assetsRoot: path.resolve(__dirname, '../docs'),
        assetsSubDirectory: 'static',
        assetsPublicPath: '/',
        productionSourceMap: false

    }

};