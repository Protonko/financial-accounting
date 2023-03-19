import type {AxiosResponse} from 'axios'
import {put, takeEvery} from '@redux-saga/core/effects'
import {ERROR_ACTION_TYPES, CallErrorAction} from '../actions'
import {resetAuthData, showErrorNotification} from '../actionCreators'
import {isAxiosError} from '../../lib/getError'

export class ErrorSagaFactory {
  static create() {
    return [ErrorSagaFactory.errorWatcher()]
  }

  private static *handleError(error: AxiosResponse<Error>) {
    switch (error.status) {
      case 403:
      case 401:
        yield put(resetAuthData())
        yield put(showErrorNotification(error.data.message))
        break
      default:
        yield put(showErrorNotification(error.data.message))
    }
  }

  private static *errorWorker({payload}: CallErrorAction) {
    if (isAxiosError(payload)) {
      yield ErrorSagaFactory.handleError(payload)
    } else {
      yield put(showErrorNotification(payload.message))
    }
  }

  private static *errorWatcher() {
    yield takeEvery(ERROR_ACTION_TYPES.CALL_ERROR, ErrorSagaFactory.errorWorker)
  }
}