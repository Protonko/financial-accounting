// login
export function* loginWorker({payload}: LoginAction): SagaIterator | Generator {
  try {
    const {accessToken, user}: IUserLoginResponse = yield call(
      UserApi.login,
      payload,
    )
    yield (api.defaults.headers.authorization = `Bearer ${accessToken}`)
    yield CookieHandler.setCookie('accessToken', accessToken, {secure: true})
    yield put(setLoginData({accessToken, user}))
  } catch (error) {
    yield put(errorHandler(error, setErrorMessage))
  }
}

export function* loginWatcher() {
  yield takeEve(AuthActionTypes.LOGIN, loginWorker)
}
