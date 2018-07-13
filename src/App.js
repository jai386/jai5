import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Routers from './route.js/Route';
import {Router,Link} from 'react-router-dom';
import history from './route.js/history';
import { Provider } from 'react-redux'
import store from './store/store';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Router history={history}>
            <div>
              <Link to="/">Home</Link><br/>
              <Link to="/about">About</Link>
            </div>
          </Router> 
        </header>
        <Provider store={store}>
          <Routers/>
        </Provider>
      </div>
    );
  }
}

export default App;
