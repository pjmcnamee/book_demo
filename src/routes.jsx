import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from './components/HomePage/Home'
import Books from './components/BooksPage/Books'
import Account from './components/AccountPage/Account'
import About from './components/AboutPage/About'
import Login from './components/AccountPage/Login'
import Register from './components/AccountPage/Register'
import Events from './components/EventsPage/Events'
import AddBookForm from './components/BooksPage/AddBookForm'
import EditAccountInfo from './components/AccountPage/EditAccountInfo'
import NewsLetter from './components/NewsLetter/NewsLetter'
import Updates from './components/Updates/Updates'
import AddArticles from "./components/Articles/AddArticles";
import ArticlesDisplay from './components/Articles/ArticlesDisplay'
import AddEvent from './components/EventsPage/AddEvent'

export default (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/books" component={Books} />
    <Route path="/account" component={Account} />
    <Route path="/events" component={Events} />
    <Route path="/about" component={About} />
    <Route path="/login" component={Login} />
    <Route path="/register" component={Register} />
    <Route path='/addBook' component={AddBookForm} />
    <Route path='/editinfo' component={EditAccountInfo} />
    <Route path='/updates' component={Updates} />
    <Route path='/newsletter' component={NewsLetter} />
    <Route path='/addArtical' component={AddArticles} />
    <Route path='/articlesDiplay' component={ArticlesDisplay} />
    <Route path='/addEvent' component={AddEvent} />
  </Switch>
);

