import {call, put, takeEvery} from '@redux-saga/core/effects'
import {getError, callError} from 'shared'
import {SPENDING_ACTION_TYPES, EditSpendingAction, Spending} from '_entities'
import {spendingEdited} from '../actionCreators'
import {EditSpendingApiService} from '../../api'

export class SpendingSagaFactory {
  static create() {
    return [
      SpendingSagaFactory.editSpendingWatcher(),
    ]
  }

  private static *editSpendingWorker({payload}: EditSpendingAction) {
    try {
      const spending: Spending = yield call(
        EditSpendingApiService.editSpending,
        payload,
      )
      yield put(spendingEdited(spending))
    } catch (error) {
      yield put(callError(getError(error)))
    }
  }

  private static *editSpendingWatcher() {
    yield takeEvery(SPENDING_ACTION_TYPES.EDIT_SPENDING, SpendingSagaFactory.editSpendingWorker)
  }
}