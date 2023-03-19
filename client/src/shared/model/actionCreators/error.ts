import type {AxiosResponse} from 'axios'
import {
  ERROR_ACTION_TYPES,
  CallErrorAction,
  HideErrorNotificationAction,
  ShowErrorNotificationAction,
} from '../actions'

export const callError = (payload: Error | AxiosResponse<Error>): CallErrorAction => ({
  type: ERROR_ACTION_TYPES.CALL_ERROR,
  payload,
})

export const showErrorNotification = (payload: string): ShowErrorNotificationAction => ({
  type: ERROR_ACTION_TYPES.SHOW_ERROR_NOTIFICATION,
  payload,
})

export const hideErrorNotification = (): HideErrorNotificationAction => ({
  type: ERROR_ACTION_TYPES.HIDE_ERROR_NOTIFICATION,
})