import {createStore, applyMiddleware, combineReducers} from 'redux'
import userReducer from './ducks/userReducer'
import booksReducer from './ducks/booksReducer'
import promiseMiddleware from 'redux-promise-middleware'

const rootReducer = combineReducers({ userReducer, booksReducer})

export default createStore(rootReducer, applyMiddleware(promiseMiddleware))