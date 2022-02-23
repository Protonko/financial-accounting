import {all} from 'redux-saga/effects'
import {AuthSagaFactory} from '@store/sagas/auth'
import {ErrorSagaFactory} from '@store/sagas/error';

export function* rootWatcher() {
  yield all([
    ...AuthSagaFactory.create(),
    ...ErrorSagaFactory.create(),
  ])
}
