import type {Spending} from 'model';
import {call, put, takeEvery} from '@redux-saga/core/effects';
import {callError, setSpendingData} from '@store/actions';
import {LoadSpendingAction, SPENDING_ACTION_TYPES} from '@store/actions/model';
import {getError} from 'utils';
import {SpendingApiService} from 'services';

export class SpendingSagaFactory {
  static create() {
    return [SpendingSagaFactory.loadSpendingWatcher()]
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
}