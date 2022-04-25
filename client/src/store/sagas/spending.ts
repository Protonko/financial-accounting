import type {Spending} from 'model'
import {call, put, takeEvery} from '@redux-saga/core/effects'
import {callError, setSpendingData, spendingCreated} from 'store/actions'
import {CreateSpendingAction, LoadSpendingAction, SPENDING_ACTION_TYPES} from 'store/actions/model'
import {getError} from 'utils'
import {SpendingApiService} from 'services'

export class SpendingSagaFactory {
  static create() {
    return [SpendingSagaFactory.loadSpendingWatcher(), SpendingSagaFactory.createSpendingWatcher()]
  }

  private static *loadSpendingWorker({payload}: LoadSpendingAction) {
    try {
      const cookie = payload.accessToken ? {'cookie': payload.accessToken} : undefined
      const spending: Spending[] = yield call(
        SpendingApiService.loadSpending,
        payload.page,
        cookie,
      )
      yield put(setSpendingData(spending))
    } catch (error) {
      yield put(callError(getError(error)))
    }
  }

  private static *loadSpendingWatcher() {
    yield takeEvery(SPENDING_ACTION_TYPES.LOAD_SPENDING, SpendingSagaFactory.loadSpendingWorker)
  }

  private static *createSpendingWorker({payload}: CreateSpendingAction) {
    try {
      const spending: Spending = yield call(
        SpendingApiService.createSpending,
        payload
      )
      yield put(spendingCreated(spending))
    } catch (error) {
      yield put(callError(getError(error)))
    }
  }

  private static *createSpendingWatcher() {
    yield takeEvery(SPENDING_ACTION_TYPES.CREATE_SPENDING, SpendingSagaFactory.createSpendingWorker)
  }
}