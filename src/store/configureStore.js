import {createStore, applyMiddleware, compose} from 'redux';
import createSagaMiddleware from 'redux-saga';

import {reactotronEnhancer, sagaMonitor} from './reactotron';
import reducers from '../reducers';
import sagas from '../sagas';

const sagaMiddleware = createSagaMiddleware({sagaMonitor});

const enhancer = compose(applyMiddleware(sagaMiddleware), reactotronEnhancer);

const configureStore = initialState => {
    const store = createStore(reducers, initialState, enhancer);
    sagaMiddleware.run(sagas);
    return store;
};

export default configureStore;
