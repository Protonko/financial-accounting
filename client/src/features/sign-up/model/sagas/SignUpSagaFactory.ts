import {call, put, takeEvery} from '@redux-saga/core/effects'
import {AUTH_ACTION_TYPES, SignUpAction} from '_entities'
import {getError, callError} from 'shared'
import {SignUpApiService} from '../../api'
import {login} from '../../../auth'

export class SignUpSagaFactory {
  static create() {
    return [SignUpSagaFactory.signUpWatcher()]
  }
  private static *signUpWorker({payload}: SignUpAction) {
    try {
      yield call(
        SignUpApiService.create,
        payload,
      )
      yield put(login(payload))
    } catch (error) {
      yield put(callError(getError(error)))
    }
  }

  private static *signUpWatcher() {
    yield takeEvery(AUTH_ACTION_TYPES.SIGN_UP, SignUpSagaFactory.signUpWorker)
  }
}


