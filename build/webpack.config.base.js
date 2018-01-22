var path = require('path');
var utils = require('./utils');
var config = require('../config');

function resolve(dir) {
    return path.join(__dirname, '..', dir);
}

module.exports = {
    entry: {
        app: './src/index.js'
    },
    output: {
        path: config.prod.assetsRoot,
        filename: '[name].js',
        publicPath: config.assetsPublicPath
    },
    resolve: {
        extensions: ['.js'],
        alias: {
            'src': resolve('src'),
            'apis': resolve('src/apis'),
            'assets': resolve('src/assets'),
            'scss': resolve('src/assets/scss'),
            'images': resolve('src/assets/images'),
            'stylesheets': resolve('src/assets/stylesheets'),
            'containers': resolve('src/containers'),
            'components': resolve('src/components'),
            'customized': resolve('src/customized'),
            'reduxes': resolve('src/reduxes'),
            'vendors': resolve('src/vendors')
        }
    },
    module: {
        rules: [{
            test: /\.js$/,
            loader: 'babel-loader',
            include: resolve('src')
        }, {
            test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
            loader: 'url-loader',
            query: {
                limit: 1000,
                name: utils.assetsPath('img/[name].[hash:7].[ext]')
            }
        }, {
            test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
            loader: 'url-loader',
            query: {
                limit: 1000,
                name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
            }
        }]
    }
};