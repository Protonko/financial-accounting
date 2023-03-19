import type {SagaIterator} from 'redux-saga'
import {call, put, takeEvery} from '@redux-saga/core/effects'
import {setUserData, AUTH_ACTION_TYPES, LoginAction, UserData, UserApiService} from 'entities'
import {getError, callError} from 'shared'

export class AuthSagaFactory {
  static create() {
    return [AuthSagaFactory.loginWatcher()]
  }

  private static *loginWorker({payload}: LoginAction): SagaIterator | Generator {
    try {
      const userData: UserData = yield call(
        UserApiService.login,
        payload,
      )
      yield put(setUserData(userData))
    } catch (error) {
      yield put(callError(getError(error)))
    }
  }

  private static *loginWatcher() {
    yield takeEvery(AUTH_ACTION_TYPES.LOGIN, AuthSagaFactory.loginWorker)
  }
}


