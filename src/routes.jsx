import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from './components/Home'
import Books from './components/Books'
import Account from './components/Account'
import About from './components/About'
import Login from './components/Login'
import Register from './components/Register'

export default (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/books" component={Books} />
    <Route path="/account" component={Account} />
    <Route path="/about" component={About} />
    <Route path="/login" component={Login} />
    <Route path="/register" component={Register} />
  </Switch>
);

