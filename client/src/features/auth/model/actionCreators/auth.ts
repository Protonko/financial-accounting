import {AUTH_ACTION_TYPES, ErrorLoginAction, LoginAction, AuthBody} from 'entities'

export const login = (payload: AuthBody): LoginAction => ({
  type: AUTH_ACTION_TYPES.LOGIN,
  payload,
})

export const errorLogin = (payload: string): ErrorLoginAction => ({
  type: AUTH_ACTION_TYPES.ERROR_LOGIN,
  payload,
})