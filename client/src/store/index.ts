import type {StoreService} from '@services/interfaces/StoreService'
import type {EpicFactory} from '@services/interfaces/EpicFactory'
import {createStore, applyMiddleware, compose, Store} from 'redux'
import {createEpicMiddleware} from 'redux-observable';
import {inject, injectable} from 'inversify'
import {SERVICE_IDENTIFIER} from '@model/service-identifier'
import {rootReducer, RootState} from './reducers'
import {rootEpic} from './epic';

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose
  }
}

@injectable()
export class StoreServiceImpl implements StoreService {
  private store: Store<RootState> | undefined

  constructor(
    @inject(SERVICE_IDENTIFIER.ROOT_EPIC_FACTORY) private epicFactory: EpicFactory
  ) {}

  getStore() {
    if (!this.store) {
      const epicMiddleware = createEpicMiddleware();
      let composeEnhancers = compose

      if (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) {
        composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
      }

      this.store = createStore(
        rootReducer,
        {},
        compose(applyMiddleware(epicMiddleware), composeEnhancers()),
      )

      epicMiddleware.run(rootEpic);
    }

    return this.store
  }
}
