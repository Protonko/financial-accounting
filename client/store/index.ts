import {createStore, applyMiddleware, compose} from 'redux'
import {rootReducer} from './reducers'

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose
  }
}

let composeEnhancers = compose

if (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) {
  composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
}

export default createStore(
  rootReducer,
  {},
  compose(applyMiddleware(), composeEnhancers()),
)
