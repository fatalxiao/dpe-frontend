const path = require('path');

module.exports = {

    assetsPublicPath: '/',
    assetsDirectory: 'dist',
    assetsSubDirectory: 'static',
    productionGzipExtensions: ['js', 'css'],

    dev: {
        port: 4001,
        srcRoot: path.resolve(__dirname, '../src'),
        index: path.resolve(__dirname, '../src/index.html'),
        assetsVirtualRoot: path.posix.join('/', 'static'),
        proxyTable: {},
        cssSourceMap: false
    },

    build: {
        index: path.resolve(__dirname, '../dist/index.html'),
        assetsRoot: path.resolve(__dirname, '../dist'),
        productionSourceMap: false
    },

    demo: {
        port: 4002
    }

};
