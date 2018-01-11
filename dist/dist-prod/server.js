process.env.NODE_ENV = 'production';

var express = require('express'),
    path = require('path'),
    proxyMiddleware = require('http-proxy-middleware'),
    history = require('connect-history-api-fallback'),
    compression = require('compression'),
    utils = require('./utils'),

    app = express(),
    config = require('./config'),
    port = config.serverPort,
    uri = 'http://localhost:' + port,
    proxyTable = config.proxyTable;

// 转发 API 请求
Object.keys(proxyTable).forEach(context => {

    var options = proxyTable[context];

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

app.use(compression());

// browserHistory 前端路由重定向
app.use(history());

// 加载打包后的静态前端文件
app.use(express.static(path.join(__dirname, 'dist')));

app.listen(port, err => {

    if (err) {
        console.log(err);
        return;
    }

    console.log('> Listening at ' + uri);

});