import React, { Component } from 'react';
import './App.css';
import {HashRouter} from 'react-router-dom'
import Nav from './components/Nav'
import routes from './routes'


class App extends Component {
  render() {
    return (
      <HashRouter>
        <div className="jank">
        <div className='main-holder'>
        <Nav />
        {routes}
        </div>
        </div>
      </HashRouter>
    );
  }
}

export default App;
