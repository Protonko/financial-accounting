import type {AnyAction} from 'redux'
import type {AuthBody, UserData} from '@model/auth'

export enum AUTH_ACTION_TYPES {
  LOGIN = 'LOGIN',
  SIGN_UP = 'SIGN_UP',
  SET_USER_DATA = 'SET_USER_DATA',
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

export type AllAuthActions =
  | LoginAction
  | SignUpAction
  | SetUserDataAction

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
