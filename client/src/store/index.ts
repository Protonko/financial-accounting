import {createStore, applyMiddleware, compose, Store} from 'redux'
import {createWrapper} from 'next-redux-wrapper'
import {createEpicMiddleware} from 'redux-observable'
import {reducer, RootState} from './reducers'
import {rootEpic} from '@store/epic'

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose
  }
}

const makeStore = () => {
  let composeEnhancers = compose
  const epicMiddleware = createEpicMiddleware()

  if (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) {
    composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  }

  const store = createStore(
    reducer,
    {},
    compose(applyMiddleware(epicMiddleware), composeEnhancers()),
  )

  epicMiddleware.run(rootEpic)

  return store
}

export const storeWrapper = createWrapper<Store<RootState, any>>(makeStore, {debug: true})
