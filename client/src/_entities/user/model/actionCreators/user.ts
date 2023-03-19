import type {UserData} from '../types'
import {AUTH_ACTION_TYPES, GetUserInfoAction, SetUserDataAction} from '../actions'

export const getUserInfo = (payload?: string): GetUserInfoAction => ({
  type: AUTH_ACTION_TYPES.GET_USER_INFO,
  payload,
})

export const setUserData = (payload: UserData): SetUserDataAction => ({
  type: AUTH_ACTION_TYPES.SET_USER_DATA,
  payload,
})