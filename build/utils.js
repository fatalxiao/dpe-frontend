const fs = require('fs'),
    path = require('path'),
    config = require('../config'),
    ExtractTextPlugin = require('extract-text-webpack-plugin');

function assetsPath(_path) {
    return path.posix.join(config.assetsSubDirectory, _path);
};

function cssLoaders(options) {

    options = options || {};

    var cssLoader = {
        loader: 'css-loader',
        options: {
            minimize: process.env.NODE_ENV === 'production',
            sourceMap: options.sourceMap
        }
    };

    // generate loader string to be used with extract text plugin
    function generateLoaders(loader, loaderOptions) {

        var loaders = [cssLoader];
        if (loader) {
            loaders.push({
                loader: loader + '-loader',
                options: Object.assign({}, loaderOptions, {
                    sourceMap: options.sourceMap
                })
            });
        }

        // Extract CSS when that option is specified
        // (which is the case during production build)
        if (options.extract) {
            return ExtractTextPlugin.extract({
                use: loaders,
                fallback: 'style-loader'
            });
        } else {
            return ['style-loader'].concat(loaders);
        }

    }

    // http://vuejs.github.io/vue-loader/en/configurations/extract-css.html
    return {
        css: generateLoaders(),
        postcss: generateLoaders(),
        less: generateLoaders('less'),
        sass: generateLoaders('sass', {indentedSyntax: true}),
        scss: generateLoaders('sass'),
        stylus: generateLoaders('stylus'),
        styl: generateLoaders('stylus')
    };

};

function styleLoaders(options) {

    var output = [];
    var loaders = exports.cssLoaders(options);

    for (var extension in loaders) {
        var loader = loaders[extension];
        output.push({
            test: new RegExp('\\.' + extension + '$'),
            use: loader
        });
    }

    return output;

};

function fsExistsSync(path) {
    try {
        fs.accessSync(path, (fs.constants && fs.constants.F_OK) || fs.F_OK);
    } catch (e) {
        return false;
    }
    return true;
};

function copyRecursionSync(src, dist, excludes) {

    const paths = fs.readdirSync(src);

    for (let path of paths) {

        if (excludes && excludes.findIndex(item => path.includes(item)) > -1) {
            continue;
        }

        const srcPath = src + '/' + path,
            distPath = dist + '/' + path,

            stat = fs.statSync(srcPath);

        if (stat.isDirectory()) {

            if (!fsExistsSync(distPath)) {
                fs.mkdirSync(distPath);
            }

            copyRecursionSync(srcPath, distPath, excludes);

        } else {
            fs.copyFileSync(srcPath, distPath);
        }

    }

};

function rmRecursionSync(p) {

    const paths = fs.readdirSync(p);

    for (let path of paths) {

        const rmPath = p + '/' + path,
            stat = fs.statSync(rmPath);

        if (stat.isDirectory()) {
            rmRecursionSync(rmPath);
            if (fsExistsSync(rmPath)) {
                fs.rmdirSync(rmPath);
            }
        } else {
            if (fsExistsSync(rmPath)) {
                fs.unlinkSync(rmPath);
            }
        }

    }

    if (fsExistsSync(p)) {
        fs.rmdirSync(p);
    }

};

function getClientIp(req) {
    return req && ((req.headers && (req.headers['x-real-ip'] || req.headers['x-forwarded-for']))
        || (req.connection && req.connection.remoteAddress)
        || (req.socket && req.socket.remoteAddress)
        || (req.connection && req.connection.socket && req.connection.socket.remoteAddress));
};

function ipParse(ip) {

    if (!ip || !ip.includes(':')) {
        return ip;
    }

    const ipArray = ip.split(':');

    if (!ipArray[3]) {
        return ip;
    }

    return ipArray[3];

}

exports.assetsPath = assetsPath;
exports.cssLoaders = cssLoaders;
exports.styleLoaders = styleLoaders;
exports.fsExistsSync = fsExistsSync;
exports.copyRecursionSync = copyRecursionSync;
exports.rmRecursionSync = rmRecursionSync;
exports.getClientIp = getClientIp;
exports.ipParse = ipParse;