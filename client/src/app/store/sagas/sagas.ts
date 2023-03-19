import {all} from 'redux-saga/effects'
import {
  SpendingSagaFactory,
  DeleteSpendingSagaFactory,
  CreateSpendingSagaFactory,
  AuthSagaFactory,
  SignUpSagaFactory,
} from 'features'
import {
  LoadSpendingSagaFactory,
  LoadCategorySagaFactory,
  GetUserInfoSagaFactory,
  ReportSagaFactory,
} from '_entities'
import {ErrorSagaFactory} from 'shared'

export function* rootWatcher() {
  yield all([
    ...SpendingSagaFactory.create(),
    ...DeleteSpendingSagaFactory.create(),
    ...CreateSpendingSagaFactory.create(),
    ...AuthSagaFactory.create(),
    ...SignUpSagaFactory.create(),
    ...LoadSpendingSagaFactory.create(),
    ...LoadCategorySagaFactory.create(),
    ...GetUserInfoSagaFactory.create(),
    ...ReportSagaFactory.create(),
    ...ErrorSagaFactory.create(),
  ])
}
