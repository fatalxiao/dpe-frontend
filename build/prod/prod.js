delete process.env['DEBUG_FD'];

const config = require('../../config');

process.env.NODE_ENV = config.prod.env.NODE_ENV;

const fs = require('fs'),
    ora = require('ora'),
    chalk = require('chalk'),
    webpack = require('webpack'),
    webpackConfig = require('./webpack.config.prod.js'),
    archiver = require('archiver'),
    {fsExistsSync, copyRecursionSync, rmRecursionSync} = require('../utils'),

    spinner = ora('building for production...').start();

webpack(webpackConfig, (err, stats) => {

    spinner.stop();

    if (err) {
        throw err;
    }

    process.stdout.write(stats.toString({
            colors: true,
            modules: false,
            children: false,
            chunks: false,
            chunkModules: false
        }) + '\n\n');

    // remove zip file
    if (fsExistsSync('./dplatform-click-web.zip')) {
        fs.unlinkSync('./dplatform-click-web.zip');
    }

    // remove temp dir
    if (fsExistsSync('./dplatform-click-web')) {
        rmRecursionSync('./dplatform-click-web');
    }

    // make temp dir
    fs.mkdirSync('./dplatform-click-web');

    // copy files
    copyRecursionSync('./dist/dist-prod', './dplatform-click-web', ['node_modules']);
    copyRecursionSync('./release', './dplatform-click-web');

    // make archive
    const output = fs.createWriteStream('./dplatform-click-web.zip'),
        archive = archiver('zip', {zlib: {level: 9}});
    output.on('close', () => {

        console.log(chalk.cyan('Archive: ' + archive.pointer() + ' total bytes'));

        // remove temp dir
        if (fsExistsSync('./dplatform-click-web')) {
            rmRecursionSync('./dplatform-click-web');
        }

    });
    archive.pipe(output);
    archive.directory('./dplatform-click-web', 'dplatform-click-web');
    archive.finalize();

    console.log(chalk.cyan('Build complete.'));

});