import Reactotron from 'reactotron-react-js';
import {reactotronRedux} from 'reactotron-redux';
import sagasPlugin from 'reactotron-redux-saga';

const reactotron = Reactotron
    .configure({name: 'single-spa-react-root-seed'})
    .use(reactotronRedux())
    .use(sagasPlugin())
    .connect();

const reactotronEnhancer = reactotron.createEnhancer();

const sagaMonitor = reactotron.createSagaMonitor();

export {reactotronEnhancer};
export {sagaMonitor};
export default reactotron;
