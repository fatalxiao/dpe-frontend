const path = require('path'),

    HappyPack = require('happypack'),
    autoprefixer = require('autoprefixer'),

    config = require('./config.js'),
    utils = require('./utils.js'),

    cssLoaderConfig = ['style-loader', {
        loader: 'css-loader',
        options: {
            minimize: true,
            importLoaders: 1
        }
    }, {
        loader: 'postcss-loader',
        options: {
            ident: 'postcss',
            plugins: [
                autoprefixer({
                    broswer: 'last 5 versions'
                })
            ]
        }
    }];

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
        publicPath: config.assetsPublicPath
    },
    resolve: {
        extensions: ['.js', '.json'],
        alias: {
            'src': resolve('src'),
            'assets': resolve('src/assets'),
            'scss': resolve('src/assets/scss'),
            'apis': resolve('src/apis'),
            'components': resolve('src/components'),
            'containers': resolve('src/containers'),
            'customized': resolve('src/customized'),
            'modules': resolve('src/containers/app/modules'),
            'reduxes': resolve('src/reduxes'),
            'vendors': resolve('src/vendors'),
            'dist': resolve('dist')
        }
    },
    module: {
        rules: [{
            test: /\.js$/,
            use: 'happypack/loader?id=js',
            include: [resolve('examples'), resolve('src')]
        }, {
            test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
            loader: 'url-loader',
            options: {
                limit: 1000,
                name: utils.assetsSubPath('img/[name].[hash:7].[ext]')
            }
        }, {
            test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
            loader: 'url-loader',
            options: {
                limit: 1000,
                name: utils.assetsSubPath('fonts/[name].[hash:7].[ext]')
            }
        }, {
            test: /\.scss$/,
            use: [...cssLoaderConfig, 'fast-sass-loader']
        }, {
            test: /\.css$/,
            use: cssLoaderConfig
        }, {
            test: /\.ht?ml/,
            loader: 'html-loader'
        }]
    },
    plugins: [
        new HappyPack({
            id: 'js',
            loaders: [{
                loader: 'babel-loader?cacheDirectory=true'
            }],
            threads: 4,
            verbose: false
        })
    ]
};
