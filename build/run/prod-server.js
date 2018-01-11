const express = require('express'),
    proxyMiddleware = require('http-proxy-middleware'),
    history = require('connect-history-api-fallback'),
    opn = require('opn'),
    compression = require('compression'),
    utils = require('../utils'),

    app = express(),
    config = require('../../config'),
    port = config.prod.port,
    uri = 'http://localhost:' + port,

    proxyTable = config.prod.proxyTable;

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

app.use(compression());

app.use(history());

app.use(express.static(config.prod.assetsRoot));

app.listen(port, err => {

    if (err) {
        console.log(err);
        return;
    }

    console.log('> Listening at ' + uri);

    opn(uri);

});