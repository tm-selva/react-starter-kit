import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';

import createSagaMiddleware from 'redux-saga';
import { applyMiddleware, compose, createStore } from 'redux';
import { Provider } from 'react-redux';
import { logger } from 'redux-logger';


import rootReducer from './reducers'
import rootSaga from './sagas'
import * as serviceWorker from './registerServiceWorker';

import App from './App';
const sagaMiddleware = createSagaMiddleware();

// const history = createBrowserHistory();
import { browserHistory } from 'react-router';
import routes from './routes';
const history = browserHistory

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
    console.log(store, history)
    return (
      <Provider store={store}>
      <div>
        <Router route={routes} history={history}>
          <App/>
        </Router>
        </div>
      </Provider>
    )
  }
}
ReactDOM.render(
  <Main/>,
  document.getElementById('app')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
