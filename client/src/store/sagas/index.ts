import {all} from 'redux-saga/effects'
import {AuthSagaFactory} from '@store/sagas/auth'

export function* rootWatcher() {
  yield all([
    ...AuthSagaFactory.create(),
  ])
}
