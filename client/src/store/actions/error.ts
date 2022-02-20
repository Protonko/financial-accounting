import {
    ERROR_ACTION_TYPES,
    HideErrorNotificationAction,
    ShowErrorNotificationAction,
} from './model'

export const showErrorNotification = (payload: string): ShowErrorNotificationAction => ({
    type: ERROR_ACTION_TYPES.SHOW_ERROR_NOTIFICATION,
    payload,
})

export const hideErrorNotification = (): HideErrorNotificationAction => ({
    type: ERROR_ACTION_TYPES.HIDE_ERROR_NOTIFICATION,
})