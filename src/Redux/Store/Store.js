import { RootSaga } from '../Saga/Root';

import { createStore,applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';

import { combineStore } from '../Reducers/index';

const sagaMiddleware=createSagaMiddleware();

export const store=createStore(combineStore,applyMiddleware(sagaMiddleware))

sagaMiddleware.run(RootSaga);
store.dispatch({type:"INFO_DATA_ACTION"});