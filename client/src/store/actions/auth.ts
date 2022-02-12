import type {AuthBody, UserData} from 'model'
import {
  AUTH_ACTION_TYPES,
  ErrorLoginAction,
  GetUserInfoAction,
  LoginAction,
  ResetAuthDataAction,
  SetUserDataAction,
  SignUpAction
} from './model'

export const login = (payload: AuthBody): LoginAction => ({
  type: AUTH_ACTION_TYPES.LOGIN,
  payload,
})

export const signUp = (payload: AuthBody): SignUpAction => ({
  type: AUTH_ACTION_TYPES.SIGN_UP,
  payload,
})

export const getUserInfo = (payload?: string): GetUserInfoAction => ({
  type: AUTH_ACTION_TYPES.GET_USER_INFO,
  payload,
})

export const setUserData = (payload: UserData): SetUserDataAction => ({
  type: AUTH_ACTION_TYPES.SET_USER_DATA,
  payload,
})

export const resetAuthData = (): ResetAuthDataAction => ({
  type: AUTH_ACTION_TYPES.RESET_AUTH_DATA,
})

export const errorLogin = (payload: string): ErrorLoginAction => ({
  type: AUTH_ACTION_TYPES.ERROR_LOGIN,
  payload,
})
