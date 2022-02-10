import type {AuthBody, UserData} from 'model'
import {
  AUTH_ACTION_TYPES,
  ErrorLoginAction,
  GetUserInfoAction,
  LoginAction,
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

export const getUserInfoData = (): GetUserInfoAction => ({
  type: AUTH_ACTION_TYPES.GET_SESSION_INFO,
})

export const setUserDataAction = (payload: UserData): SetUserDataAction => ({
  type: AUTH_ACTION_TYPES.SET_USER_DATA,
  payload,
})

export const errorLoginAction = (payload: string): ErrorLoginAction => ({
  type: AUTH_ACTION_TYPES.ERROR_LOGIN,
  payload,
})
