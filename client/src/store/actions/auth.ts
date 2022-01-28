import type {AnyAction} from 'redux'
import type {AuthBody, UserData} from '@model/auth'

export enum AUTH_ACTION_TYPES {
  LOGIN = 'LOGIN',
  SIGN_UP = 'SIGN_UP',
  SET_USER_DATA = 'SET_USER_DATA',
  ERROR_LOGIN = 'ERROR_LOGIN',
}

export interface LoginAction extends AnyAction {
  type: AUTH_ACTION_TYPES.LOGIN
  payload: AuthBody
}

export interface SignUpAction extends AnyAction {
  type: AUTH_ACTION_TYPES.SIGN_UP
  payload: AuthBody
}

export interface SetUserDataAction extends AnyAction {
  type: AUTH_ACTION_TYPES.SET_USER_DATA
  payload: UserData
}

export interface ErrorLoginAction extends AnyAction {
  type: AUTH_ACTION_TYPES.ERROR_LOGIN,
  payload: string
}

export type AllAuthActions =
  | LoginAction
  | SignUpAction
  | SetUserDataAction
  | ErrorLoginAction

export const login = (payload: AuthBody): LoginAction => ({
  type: AUTH_ACTION_TYPES.LOGIN,
  payload,
})

export const signUp = (payload: AuthBody): SignUpAction => ({
  type: AUTH_ACTION_TYPES.SIGN_UP,
  payload,
})

export const setUserDataAction = (payload: UserData): SetUserDataAction => ({
  type: AUTH_ACTION_TYPES.SET_USER_DATA,
  payload,
})

export const errorLoginAction = (payload: string): ErrorLoginAction => ({
  type: AUTH_ACTION_TYPES.ERROR_LOGIN,
  payload,
})
