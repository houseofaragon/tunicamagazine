import rootReducer from '../reducers';
import thunk from 'redux-thunk'
import {createStore, applyMiddleware} from 'redux';
import createLogger from 'redux-logger'
import { browserHistory } from 'react-router'
import { routerMiddleware } from 'react-router-redux'

const router = routerMiddleware(browserHistory)

export default function configureStore (initialState) {
  return applyMiddleware(thunk, router, createLogger())(createStore)(rootReducer, initialState, window.devToolsExtension && window.devToolsExtension());
};
