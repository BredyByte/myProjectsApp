import { applyMiddleware, createStore } from 'redux';
import { rootReducer } from './rootReducer';
import rootSaga from './saga/index';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import { logger } from 'redux-logger';
import thunk from 'redux-thunk'

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware, thunk, logger))
);

sagaMiddleware.run(rootSaga);
export default store;
