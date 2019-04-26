import {createStore, applyMiddleware, combineReducers} from 'redux'
import userReducer from './ducks/userReducer'
import booksReducer from './ducks/booksReducer'
import promiseMiddleware from 'redux-promise-middleware'
import { composeWithDevTools } from 'redux-devtools-extension'

const rootReducer = combineReducers({ userReducer, booksReducer})

export default createStore(rootReducer, composeWithDevTools(applyMiddleware(promiseMiddleware)))