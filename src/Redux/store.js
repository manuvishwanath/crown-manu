import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import { persistStore } from 'redux-persist'
import RootReducer from './root-reducer';
//import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga'

import rootSaga from './root-saga'

const sagaMiddleware = createSagaMiddleware();

const middleware = [sagaMiddleware];

if (process.env.NODE_ENV === 'development') {
    middleware.push(logger)
}

export const store = createStore(RootReducer, applyMiddleware(...middleware));

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);

export default store;
