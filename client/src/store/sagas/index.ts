import {all, takeLatest, put} from 'redux-saga/effects'
import {AuthSagaFactory} from '@store/sagas/auth'
import {AUTH_ACTION_TYPES} from '@store/actions/model'

function* loadDataSaga() {
  try {
    // @ts-ignore
    const res = yield fetch('https://jsonplaceholder.typicode.com/users')
    // @ts-ignore
    const data = yield res.json()
    yield put(loadDataSuccess(data))
  } catch {
    console.log(123)
  }
}

function* rootSaga() {
  yield all([
    takeLatest(AUTH_ACTION_TYPES.LOAD_DATA, loadDataSaga),
  ])
}

export function* rootWatcher() {
  yield all([
    ...AuthSagaFactory.create(),
  ])
}
