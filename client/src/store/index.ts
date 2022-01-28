import {createStore, applyMiddleware, compose} from 'redux'
import {createEpicMiddleware} from 'redux-observable';
import {rootReducer} from './reducers'
import {rootEpic} from '@store/epic'

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose
  }
}

const epicMiddleware = createEpicMiddleware();
let composeEnhancers = compose

if (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) {
  composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
}

export const store = createStore(
  rootReducer,
  {},
  compose(applyMiddleware(epicMiddleware), composeEnhancers()),
)

epicMiddleware.run(rootEpic);
