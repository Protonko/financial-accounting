import {AUTH_ACTION_TYPES, ResetAuthDataAction} from '../actions'

export const resetAuthData = (): ResetAuthDataAction => ({
  type: AUTH_ACTION_TYPES.RESET_AUTH_DATA,
})