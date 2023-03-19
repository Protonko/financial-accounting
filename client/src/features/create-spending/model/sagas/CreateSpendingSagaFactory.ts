import {call, put, takeEvery} from '@redux-saga/core/effects'
import {
  Spending,
  CreateSpendingAction,
  SPENDING_ACTION_TYPES,
} from '_entities'
import {getError, callError} from 'shared'
import {spendingCreated,} from '../actionCreators'
import {CreateSpendingApiService} from '../../api'

export class CreateSpendingSagaFactory {
  static create() {
    return [
      CreateSpendingSagaFactory.createSpendingWatcher(),
    ]
  }

  private static *createSpendingWorker({payload}: CreateSpendingAction) {
    try {
      const spending: Spending = yield call(
        CreateSpendingApiService.createSpending,
        payload
      )
      yield put(spendingCreated(spending))
    } catch (error) {
      yield put(callError(getError(error)))
    }
  }

  private static *createSpendingWatcher() {
    yield takeEvery(SPENDING_ACTION_TYPES.CREATE_SPENDING, CreateSpendingSagaFactory.createSpendingWorker)
  }
}