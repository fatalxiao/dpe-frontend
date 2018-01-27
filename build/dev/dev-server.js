delete process.env['DEBUG_FD'];

const config = require('../../config');

process.env.NODE_ENV = config.dev.env.NODE_ENV;

const opn = require('opn'),
    webpack = require('webpack'),
    proxyMiddleware = require('http-proxy-middleware'),
    history = require('connect-history-api-fallback'),
    utils = require('../utils'),

    port = process.env.PORT || config.dev.port,
    uri = 'http://localhost:' + port,

    // API 转发配置
    proxyTable = config.dev.proxyTable,

    express = require('express'),
    app = express(),

    webpackConfig = require('./webpack.config.dev.js'),
    compiler = webpack(webpackConfig),

    devMiddleware = require('webpack-dev-middleware')(compiler, {
        publicPath: webpackConfig.output.publicPath,
        logLevel: 'error'
    }),

    hotMiddleware = require('webpack-hot-middleware')(compiler, {
        log: console.log
    });

// html 模板改变时刷新页面
compiler.plugin('compilation', compilation => {
    compilation.plugin('html-webpack-plugin-after-emit', (data, cb) => {
        hotMiddleware.publish({action: 'reload'});
        cb();
    });
});

// 转发 API 请求
Object.keys(proxyTable).forEach(context => {

    let options = proxyTable[context];

    if (typeof options === 'string') {
        options = {
            target: options,
            changeOrigin: true
        };
    }

    options.onProxyReq = (proxyReq, req, res) => {

        const ip = utils.getClientIp(req);
        ip && proxyReq.setHeader('ip', utils.ipParse(ip));

        if (req.headers && !req.headers.token && req.query && req.query.token) {
            proxyReq.setHeader('token', req.query.token);
        }

    };

    app.use(proxyMiddleware(options.filter || context, options));

});

// browserHistory 前端路由重定向
app.use(history());

app.use(devMiddleware);
app.use(hotMiddleware);

// 托管静态文件
app.use(config.dev.assetsVirtualRoot, express.static('./static'));

devMiddleware.waitUntilValid(() => {
    console.log('> Listening at ' + uri + '\n');
});

module.exports = app.listen(port, error => {

    if (error) {
        console.log(error);
        return;
    }

    console.log('> Listening at ' + uri);
    opn(uri);

});