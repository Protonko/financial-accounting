import {call, put, takeEvery} from '@redux-saga/core/effects'
import {DeleteSpendingAction, SPENDING_ACTION_TYPES} from 'entities'
import {getError, callError} from 'shared'
import {spendingDeleted} from '../actionCreators'
import {DeleteSpendingApiService} from '../../api'

export class DeleteSpendingSagaFactory {
  static create() {
    return [
      DeleteSpendingSagaFactory.deleteSpendingWatcher(),
    ]
  }

  private static *deleteSpendingWorker({payload}: DeleteSpendingAction) {
    try {
      const id: number = yield call(
        DeleteSpendingApiService.deleteSpending,
        payload,
      )
      yield put(spendingDeleted(id))
    } catch (error) {
      yield put(callError(getError(error)))
    }
  }

  private static *deleteSpendingWatcher() {
    yield takeEvery(SPENDING_ACTION_TYPES.DELETE_SPENDING, DeleteSpendingSagaFactory.deleteSpendingWorker)
  }
}