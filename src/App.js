import React, { Component } from 'react';
import './App.css';
import {HashRouter} from 'react-router-dom'
import routes from './routes'
import { ParallaxProvider } from 'react-scroll-parallax';


class App extends Component {
  render() {
    return (
      <ParallaxProvider>
      <HashRouter>
        {routes}
      </HashRouter>
      </ParallaxProvider>
    );
  }
}

export default App;
