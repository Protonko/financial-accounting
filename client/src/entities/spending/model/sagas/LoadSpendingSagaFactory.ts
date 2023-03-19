import type {SpendingPage} from '../types'
import {call, put, takeEvery} from '@redux-saga/core/effects'
import {getError, callError} from 'shared'
import {setSpendingData} from '../actionCreators'
import {LoadSpendingAction, SPENDING_ACTION_TYPES} from '../actions'
import {LoadSpendingApiService} from '../../api'

export class LoadSpendingSagaFactory {
  static create() {
    return [
      LoadSpendingSagaFactory.loadSpendingWatcher(),
    ]
  }

  private static *loadSpendingWorker({payload}: LoadSpendingAction) {
    try {
      const cookie = payload.accessToken ? {'cookie': payload.accessToken} : undefined
      const spendingPage: SpendingPage = yield call(
        LoadSpendingApiService.loadSpending,
        payload.offset,
        payload.size,
        cookie,
      )
      yield put(setSpendingData(spendingPage))
    } catch (error) {
      yield put(callError(getError(error)))
    }
  }

  private static *loadSpendingWatcher() {
    yield takeEvery(SPENDING_ACTION_TYPES.LOAD_SPENDING, LoadSpendingSagaFactory.loadSpendingWorker)
  }
}