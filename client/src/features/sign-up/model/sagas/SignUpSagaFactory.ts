import {call, put, takeEvery} from '@redux-saga/core/effects'
import {setUserData, AUTH_ACTION_TYPES, UserApiService, SignUpAction, UserData} from '_entities'
import {getError, callError} from 'shared'
import {SignUpApiService} from '../../api'

export class SignUpSagaFactory {
  static create() {
    return [SignUpSagaFactory.signUpWatcher()]
  }
  private static *signUpWorker({payload}: SignUpAction) {
    try {
      const userData: UserData = yield call(
        SignUpApiService.create,
        payload,
      )
      yield call(
        UserApiService.login,
        payload,
      )
      yield put(setUserData(userData))
    } catch (error) {
      yield put(callError(getError(error)))
    }
  }

  private static *signUpWatcher() {
    yield takeEvery(AUTH_ACTION_TYPES.SIGN_UP, SignUpSagaFactory.signUpWorker)
  }
}


