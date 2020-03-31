const {parallel, src} = require('gulp');
const gulpLoadPlugins = require('gulp-load-plugins');

const config = require('./config.json');

const plugins = gulpLoadPlugins();

const eslint = () => src(
    config.eslint.src
).pipe(
    plugins.eslint()
).pipe(
    plugins.eslint.format()
).pipe(
    plugins.eslint.failAfterError()
);

module.exports = parallel(eslint);
