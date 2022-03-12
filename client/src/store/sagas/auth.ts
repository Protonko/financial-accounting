import type {SagaIterator} from 'redux-saga'
import type {UserData} from 'model'
import {call, put, takeEvery} from '@redux-saga/core/effects'
import {AUTH_ACTION_TYPES, GetUserInfoAction, LoginAction, SignUpAction} from '@store/actions/model'
import {callError, setUserData} from '@store/actions'
import {UserApiService} from 'services'
import {getError} from 'utils';

export class AuthSagaFactory {
  static create() {
    return [AuthSagaFactory.loginWatcher(), AuthSagaFactory.getUserInfoWatcher(), AuthSagaFactory.signUpWatcher()]
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

  private static *signUpWorker({payload}: SignUpAction) {
    try {
      const userData: UserData = yield call(
          UserApiService.create,
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
    yield takeEvery(AUTH_ACTION_TYPES.SIGN_UP, AuthSagaFactory.signUpWorker)
  }

  private static *getUserInfoWorker({payload}: GetUserInfoAction): SagaIterator | Generator {
    try {
      const cookie = payload ? {'cookie': payload} : undefined
      const userData: UserData = yield call(
        UserApiService.getUserInfo,
        cookie
      )
      yield put(setUserData(userData))
    } catch (error) {
      yield put(callError(getError(error)))
    }
  }

  private static *getUserInfoWatcher() {
    yield takeEvery(AUTH_ACTION_TYPES.GET_USER_INFO, AuthSagaFactory.getUserInfoWorker)
  }
}


