import type {AnyAction} from 'redux'
import type {HydrateAction} from '@store/actions/model/hydrate'
import type {AuthBody, UserData} from '@model/auth'

export enum AUTH_ACTION_TYPES {
  LOGIN = 'LOGIN',
  SIGN_UP = 'SIGN_UP',
  GET_USER_INFO = 'GET_USER_INFO',
  SET_USER_DATA = 'SET_USER_DATA',
  ERROR_LOGIN = 'ERROR_LOGIN',
  RESET_AUTH_DATA = 'RESET_AUTH_DATA',
}

export interface LoginAction extends AnyAction {
  type: AUTH_ACTION_TYPES.LOGIN
  payload: AuthBody
}

export interface SignUpAction extends AnyAction {
  type: AUTH_ACTION_TYPES.SIGN_UP
  payload: AuthBody
}

export interface GetUserInfoAction extends AnyAction {
  type: AUTH_ACTION_TYPES.GET_USER_INFO,
  payload?: string,
}

export interface SetUserDataAction extends AnyAction {
  type: AUTH_ACTION_TYPES.SET_USER_DATA
  payload: UserData
}

export interface ErrorLoginAction extends AnyAction {
  type: AUTH_ACTION_TYPES.ERROR_LOGIN,
  payload: string
}

export interface ResetAuthDataAction extends AnyAction {
  type: AUTH_ACTION_TYPES.RESET_AUTH_DATA
}

export type AllAuthActions =
  | LoginAction
  | SignUpAction
  | SetUserDataAction
  | ErrorLoginAction
  | ResetAuthDataAction
  | HydrateAction

