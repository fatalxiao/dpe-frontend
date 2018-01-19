const utils = require('./../utils'),
    webpack = require('webpack'),
    config = require('../../config/index'),
    merge = require('webpack-merge'),
    baseWebpackConfig = require('./../webpack.config.base.js'),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin');

Object.keys(baseWebpackConfig.entry).forEach(name => {
    baseWebpackConfig.entry[name] = ['./build/dev/dev-client'].concat(baseWebpackConfig.entry[name]);
});

module.exports = merge(baseWebpackConfig, {

    module: {
        rules: utils.styleLoaders({sourceMap: false})
    },

    devtool: '#cheap-module-eval-source-map',

    plugins: [

        new webpack.DefinePlugin({
            'process.env': config.dev.env
        }),

        new webpack.HotModuleReplacementPlugin(),

        new webpack.NoEmitOnErrorsPlugin(),

        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './src/index.html',
            favicon: './src/assets/images/favicon.ico',
            inject: true
        }),

        new FriendlyErrorsPlugin()

    ]

});