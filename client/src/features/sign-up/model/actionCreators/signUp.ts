import {AUTH_ACTION_TYPES, SignUpAction, AuthBody} from 'entities'

export const signUp = (payload: AuthBody): SignUpAction => ({
  type: AUTH_ACTION_TYPES.SIGN_UP,
  payload,
})
