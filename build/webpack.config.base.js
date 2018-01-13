const path = require('path'),
    utils = require('./utils'),
    config = require('../config');

function resolve(dir) {
    return path.join(__dirname, '..', dir);
}

module.exports = {
    entry: {
        app: './src/index.js'
    },
    output: {
        path: config.build.assetsRoot,
        filename: '[name].js',
        publicPath: process.env.NODE_ENV === 'production'
            ? config.build.assetsPublicPath
            : config.dev.assetsPublicPath
    },
    resolve: {
        extensions: ['.js', '.json'],
        alias: {
            'src': resolve('src'),
            'apis': resolve('src/apis'),
            'assets': resolve('src/assets'),
            'scss': resolve('src/assets/scss'),
            'stylesheets': resolve('src/assets/stylesheets'),
            'components': resolve('src/components'),
            'containers': resolve('src/containers'),
            'modules': resolve('src/containers/app/modules'),
            'dist': resolve('dist'),
            'vendors': resolve('src/vendors'),
            'reduxes': resolve('src/reduxes'),
            'docs': resolve('docs')
        }
    },
    module: {
        rules: [{
            test: /\.js$/,
            loader: 'babel-loader',
            include: [resolve('src')]
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
        }, {
            test: /\.json$/,
            loader: 'json-loader'
        }]
    }
};