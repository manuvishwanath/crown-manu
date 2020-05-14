import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import { persistStore } from 'redux-persist'
import RootReducer from './root-reducer';

const middleware = [logger];

export const store = createStore(RootReducer, applyMiddleware(...middleware));

export const persistor = persistStore(store);

export default store;
