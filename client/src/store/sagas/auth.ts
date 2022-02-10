import type {SagaIterator} from 'redux-saga'
import type {UserData} from '@model/auth'
import {call, put, takeEvery} from '@redux-saga/core/effects'
import {AUTH_ACTION_TYPES, GetUserInfoAction, LoginAction} from '@store/actions/model'
import {errorLogin, setUserData} from '@store/actions'
import {UserApiService} from '@services/UserApiService'

export class AuthSagaFactory {
  static create() {
    return [AuthSagaFactory.loginWatcher(), AuthSagaFactory.getUserInfoWatcher()]
  }

  private static *loginWorker({payload}: LoginAction): SagaIterator | Generator {
    try {
      const userData: UserData = yield call(
        UserApiService.login,
        payload,
      )
      yield put(setUserData(userData))
    } catch (error) {
      if (error instanceof Error) {
        yield put(errorLogin(error.message))
      }
    }
  }

  private static *loginWatcher() {
    yield takeEvery(AUTH_ACTION_TYPES.LOGIN, AuthSagaFactory.loginWorker)
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
      if (error instanceof Error) {
        yield put(errorLogin(error.message))
      }
    }
  }

  private static *getUserInfoWatcher() {
    yield takeEvery(AUTH_ACTION_TYPES.GET_USER_INFO, AuthSagaFactory.getUserInfoWorker)
  }
}


