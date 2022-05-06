import type {AnyAction} from 'redux'
import type {
  CreateSpendingBody,
  Spending,
  SpendingFilters,
  SpendingPage,
  UpdateSpendingBody,
} from 'model'
import type {HydrateAction} from './hydrate'

export enum SPENDING_ACTION_TYPES {
  LOAD_SPENDING = 'LOAD_SPENDING',
  SET_SPENDING_DATA = 'SET_SPENDING_DATA',
  CREATE_SPENDING = 'CREATE_SPENDING',
  SPENDING_CREATED = 'SPENDING_CREATED',
  DELETE_SPENDING = 'DELETE_SPENDING',
  SPENDING_DELETED = 'SPENDING_DELETED',
  EDIT_SPENDING = 'EDIT_SPENDING',
  SPENDING_EDITED = 'SPENDING_EDITED',
}

export interface LoadSpendingAction extends AnyAction {
  type: SPENDING_ACTION_TYPES.LOAD_SPENDING,
  payload: SpendingFilters,
}

export interface SetSpendingDataAction extends AnyAction {
  type: SPENDING_ACTION_TYPES.SET_SPENDING_DATA,
  payload: SpendingPage,
}

export interface CreateSpendingAction extends AnyAction {
  type: SPENDING_ACTION_TYPES.CREATE_SPENDING,
  payload: CreateSpendingBody,
}

export interface SpendingCreatedAction extends AnyAction {
  type: SPENDING_ACTION_TYPES.SPENDING_CREATED,
  payload: Spending,
}

export interface DeleteSpendingAction extends AnyAction {
  type: SPENDING_ACTION_TYPES.DELETE_SPENDING,
  payload: number,
}

export interface SpendingDeletedAction extends AnyAction {
  type: SPENDING_ACTION_TYPES.SPENDING_DELETED,
  payload: number,
}

export interface EditSpendingAction extends AnyAction {
  type: SPENDING_ACTION_TYPES.EDIT_SPENDING,
  payload: UpdateSpendingBody,
}

export interface SpendingEditedAction extends AnyAction {
  type: SPENDING_ACTION_TYPES.SPENDING_EDITED,
  payload: Spending,
}

export type AllSpendingActions =
  | LoadSpendingAction
  | SetSpendingDataAction
  | CreateSpendingAction
  | SpendingCreatedAction
  | DeleteSpendingAction
  | SpendingDeletedAction
  | EditSpendingAction
  | SpendingEditedAction
  | HydrateAction