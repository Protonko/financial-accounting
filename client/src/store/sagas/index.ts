import {all} from 'redux-saga/effects'
import {AuthSagaFactory} from './auth'
import {ErrorSagaFactory} from './error'
import {SpendingSagaFactory} from './spending'

export function* rootWatcher() {
  yield all([
    ...AuthSagaFactory.create(),
    ...ErrorSagaFactory.create(),
    ...SpendingSagaFactory.create(),
  ])
}
