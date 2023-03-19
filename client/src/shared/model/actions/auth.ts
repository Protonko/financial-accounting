import {AnyAction} from 'redux'

export enum AUTH_ACTION_TYPES {
  RESET_AUTH_DATA = 'RESET_AUTH_DATA',
}

export interface ResetAuthDataAction extends AnyAction {
  type: AUTH_ACTION_TYPES.RESET_AUTH_DATA
}