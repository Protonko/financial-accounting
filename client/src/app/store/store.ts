import {createStore, applyMiddleware, compose, Store} from 'redux'
import createSagaMiddleware, {Task} from 'redux-saga'
import {createWrapper} from 'next-redux-wrapper'
import {rootWatcher} from './sagas'
import {rootReducer, RootState} from './reducers'

export interface SagaStore extends Store {
  sagaTask?: Task;
}

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose
  }
}

const makeStore = () => {
  let composeEnhancers = compose
  const sagaMiddleware = createSagaMiddleware();

  if (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) {
    composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  }

  const store: SagaStore = createStore(
    rootReducer,
    {},
    compose(applyMiddleware(sagaMiddleware), composeEnhancers()),
  )

  store.sagaTask = sagaMiddleware.run(rootWatcher);

  return store
}

export const storeWrapper = createWrapper<Store<RootState>>(makeStore, {debug: true})
