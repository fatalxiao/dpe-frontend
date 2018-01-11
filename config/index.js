var path = require('path');

module.exports = {

    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    productionGzipExtensions: ['js', 'css'],

    dev: {
        env: require('./dev.env'),
        port: 3010,
        autoOpenBrowser: true,
        srcRoot: path.resolve(__dirname, '../src'),
        index: path.resolve(__dirname, '../src/index.html'),
        assetsVirtualRoot: path.posix.join('/', 'static'),
        proxyTable: {
            '/dpe-api': 'http://'
        }
    },

    prod: {
        env: require('./prod.env'),
        port: 3013,
        index: path.resolve(__dirname, '../dist/dist-prod/dist/index.html'),
        assetsRoot: path.resolve(__dirname, '../dist/dist-prod/dist'),
        proxyTable: {
            '/dpe-api': 'http://'
        }
    }

};