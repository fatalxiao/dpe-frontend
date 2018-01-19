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
    if (fsExistsSync('./dpe-frontend.zip')) {
        fs.unlinkSync('./dpe-frontend.zip');
    }

    // remove temp dir
    if (fsExistsSync('./dpe-frontend')) {
        rmRecursionSync('./dpe-frontend');
    }

    // make temp dir
    fs.mkdirSync('./dpe-frontend');

    // copy files
    copyRecursionSync('./dist/dist-prod', './dpe-frontend', ['node_modules']);
    copyRecursionSync('./release', './dpe-frontend');

    // make archive
    const output = fs.createWriteStream('./dpe-frontend.zip'),
        archive = archiver('zip', {zlib: {level: 9}});
    output.on('close', () => {

        console.log(chalk.cyan('Archive: ' + archive.pointer() + ' total bytes'));

        // remove temp dir
        if (fsExistsSync('./dpe-frontend')) {
            rmRecursionSync('./dpe-frontend');
        }

    });
    archive.pipe(output);
    archive.directory('./dpe-frontend', 'dpe-frontend');
    archive.finalize();

    console.log(chalk.cyan('Build complete.'));

});