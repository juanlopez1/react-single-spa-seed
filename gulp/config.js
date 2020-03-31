const dotenv = require('dotenv');

const loadConfig = environment => cb => {
    dotenv.config({path: `.env-${environment}`});
    cb();
};

const loadProdConfig = loadConfig('prod');
loadProdConfig.displayName = 'load PROD config';

exports.loadProdConfig = loadProdConfig;
