import React, { Component } from 'react';
import './App.css';
import {HashRouter} from 'react-router-dom'
import routes from './routes'
import Header from './components/Header/Header';


class App extends Component {
  render() {
    return (
      <HashRouter>
        <div className="jank">
        <Header />
        {routes}
        </div>
      </HashRouter>
    );
  }
}

export default App;
