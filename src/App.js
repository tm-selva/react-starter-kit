import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import routes from './routes';
import { Link } from 'react-router-dom'
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div>
            <ul>
              <li><Link to='/'>Home</Link></li>
              <li><Link to='/counter'>Counter</Link></li>
              <li><Link to='/404'>404</Link></li>
            </ul>
          </div>
          <img src={logo} className="App-logo" alt="logo" />
          {routes}
        </header>
      </div>
    );
  }
}

export default App;
