import type {AnyAction} from 'redux';
import type {HydrateAction} from './hydrate';

export enum ERROR_ACTION_TYPES {
    SHOW_ERROR_NOTIFICATION = 'SHOW_ERROR_NOTIFICATION',
    HIDE_ERROR_NOTIFICATION = 'HIDE_ERROR_NOTIFICATION',
}

export interface ShowErrorNotificationAction extends AnyAction {
    type: ERROR_ACTION_TYPES.SHOW_ERROR_NOTIFICATION,
    payload: string,
}

export interface HideErrorNotificationAction extends AnyAction {
    type: ERROR_ACTION_TYPES.HIDE_ERROR_NOTIFICATION,
}

export type AllErrorActions =
    | ShowErrorNotificationAction
    | HideErrorNotificationAction
    | HydrateAction