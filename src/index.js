import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import { Provider } from 'react-redux';

import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import store from './config/store'

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
