import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import createSagaMiddleware from 'redux-saga';
import { applyMiddleware, compose, createStore } from 'redux';
import { Provider } from 'react-redux';
import { logger } from 'redux-logger';


import rootReducer from './reducers'
import rootSaga from './sagas'


import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';


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


class Main extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
        store
      };
    }
  
    render() {
      return (
        <Provider store={store}>
          <Router>
            <App />
          </Router>
        </Provider>
      )
    }
  }
ReactDOM.render(<Main />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
