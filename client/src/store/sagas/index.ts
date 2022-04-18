import {all} from 'redux-saga/effects'
import {AuthSagaFactory} from './auth'
import {CategorySagaFactory} from '@store/sagas/category';
import {ErrorSagaFactory} from './error'
import {SpendingSagaFactory} from './spending'

export function* rootWatcher() {
  yield all([
    ...AuthSagaFactory.create(),
    ...CategorySagaFactory.create(),
    ...ErrorSagaFactory.create(),
    ...SpendingSagaFactory.create(),
  ])
}
