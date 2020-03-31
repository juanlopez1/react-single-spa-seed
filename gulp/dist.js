/* eslint-disable no-param-reassign */
const {dest, series, src} = require('gulp');
const gulpLoadPlugins = require('gulp-load-plugins');
const del = require('del');
const webpack = require('webpack');
const webpackStream = require('webpack-stream');

const config = require('./config.json');
const webpackConfigProd = require('../webpack.config.prod.js');

const plugins = gulpLoadPlugins();

const clean = () => del(config.clean.dist);

const webpackTask = () => src(
    'index.js'
).pipe(
    webpackStream(webpackConfigProd, webpack)
).pipe(
    dest('dist/public/assets')
);

const copy = () => src(
    config.copy.dist.src, {base: '.'}
).pipe(
    dest(config.copy.dist.dest)
);

const rename = () => src(
    config.rename.dist.src
).pipe(
    plugins.rename('.env')
).pipe(
    dest(config.rename.dist.dest)
);

const move = () => src(
    config.move.dist.src
).pipe(
    dest(config.move.dist.dest)
);

const distPackage = () => src(
    './package.json'
).pipe(
    plugins.jsonEditor(
        json => {
            delete json.devDependencies;
            return json;
        },
        {end_with_newline: true}
    )
).pipe(
    dest('dist/')
);

exports.clean = clean;
exports.dist = series(webpackTask, copy, rename, move, distPackage);
