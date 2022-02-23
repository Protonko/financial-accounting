import type {AxiosResponse} from 'axios';
import type {AnyAction} from 'redux';
import type {HydrateAction} from './hydrate';

export enum ERROR_ACTION_TYPES {
    CALL_ERROR = 'CALL_ERROR',
    SHOW_ERROR_NOTIFICATION = 'SHOW_ERROR_NOTIFICATION',
    HIDE_ERROR_NOTIFICATION = 'HIDE_ERROR_NOTIFICATION',
}

export interface CallErrorAction extends AnyAction {
    type: ERROR_ACTION_TYPES.CALL_ERROR,
    payload: Error | AxiosResponse<Error>,
}

export interface ShowErrorNotificationAction extends AnyAction {
    type: ERROR_ACTION_TYPES.SHOW_ERROR_NOTIFICATION,
    payload: string,
}

export interface HideErrorNotificationAction extends AnyAction {
    type: ERROR_ACTION_TYPES.HIDE_ERROR_NOTIFICATION,
}

export type AllErrorActions =
    | CallErrorAction
    | ShowErrorNotificationAction
    | HideErrorNotificationAction
    | HydrateAction