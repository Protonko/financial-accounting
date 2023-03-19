import type {SagaIterator} from 'redux-saga'
import type {UserData} from '../types'
import {call, put, takeEvery} from '@redux-saga/core/effects'
import {getError, callError} from 'shared'
import {AUTH_ACTION_TYPES, GetUserInfoAction} from '../actions'
import {setUserData} from '../actionCreators'
import {UserApiService} from '../../api'

export class GetUserInfoSagaFactory {
  static create() {
    return [GetUserInfoSagaFactory.getUserInfoWatcher()]
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
    yield takeEvery(AUTH_ACTION_TYPES.GET_USER_INFO, GetUserInfoSagaFactory.getUserInfoWorker)
  }
}


