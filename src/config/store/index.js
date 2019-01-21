import createSagaMiddleware from 'redux-saga';
import { applyMiddleware, compose, createStore } from 'redux';
import { logger } from 'redux-logger';


import rootReducer from './../../reducers'
import rootSaga from './../../sagas'


const sagaMiddleware = createSagaMiddleware();

const composeEnhancer = (window).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancer(
    applyMiddleware(
      sagaMiddleware,
      logger
    )
  )
);

sagaMiddleware.run(rootSaga);


export default store