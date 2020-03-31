/* eslint-disable global-require,consistent-return */
const dotenv = require('dotenv');
const winston = require('winston');

dotenv.config();

const {
    MORGAN_FORMAT, NODE_ENV, PORT, SERVE_STATIC
} = process.env;

const logger = winston.createLogger({
    transports: [
        new winston.transports.Console({
            format: winston.format.simple()
        })
    ]
});

if (NODE_ENV === 'development') {
    const webpack = require('webpack');
    const WebpackDevServer = require('webpack-dev-server');

    const config = require('./webpack.config.dev');

    return new WebpackDevServer(webpack(config), config.devServer).listen(
        PORT,
        '127.0.0.1',
        () => logger.info(`Server started at port ${PORT}`)
    );
}

const connect = require('connect');
const http = require('http');
const morgan = require('morgan');
const path = require('path');
const serveStatic = require('serve-static');

const app = connect();

app.use(morgan(MORGAN_FORMAT));
app.use(serveStatic(path.join(__dirname, SERVE_STATIC)));

http.createServer(app).listen(
    PORT,
    () => logger.info(`Server started at port ${PORT}`)
);
