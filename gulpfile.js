const {parallel, series} = require('gulp');

const {loadProdConfig} = require('./gulp/config');
const {clean, dist} = require('./gulp/dist');
const lint = require('./gulp/lint');

exports.lint = lint;

exports.build = series(
    parallel(clean, loadProdConfig),
    dist
);
