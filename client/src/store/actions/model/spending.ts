import type {AnyAction} from 'redux'
import type {
  CreateSpendingBody,
  Spending,
  SpendingFilters,
  SpendingGroupedByDatePage,
  SpendingPage,
  UpdateSpendingBody,
} from 'model'
import type {HydrateAction} from './hydrate'

export enum SPENDING_ACTION_TYPES {
  LOAD_SPENDING = 'LOAD_SPENDING',
  SET_SPENDING_DATA = 'SET_SPENDING_DATA',
  LOAD_SPENDING_GROUPED_BY_DATE = 'LOAD_SPENDING_GROUPED_BY_DATE',
  SET_SPENDING_GROUPED_BY_DATE_DATA = 'SET_SPENDING_GROUPED_BY_DATE_DATA',
  RESET_SPENDING_GROUPED_BY_DATE = 'RESET_SPENDING_GROUPED_BY_DATE',
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

export interface LoadSpendingGroupedByDateAction extends AnyAction {
  type: SPENDING_ACTION_TYPES.LOAD_SPENDING_GROUPED_BY_DATE,
  payload: SpendingFilters,
}

export interface SetSpendingGroupedByDateDataAction extends AnyAction {
  type: SPENDING_ACTION_TYPES.SET_SPENDING_GROUPED_BY_DATE_DATA,
  payload: SpendingGroupedByDatePage,
}

export interface ResetSpendingGroupedByDateAction extends AnyAction {
  type: SPENDING_ACTION_TYPES.RESET_SPENDING_GROUPED_BY_DATE,
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
  | LoadSpendingGroupedByDateAction
  | SetSpendingGroupedByDateDataAction
  | ResetSpendingGroupedByDateAction
  | CreateSpendingAction
  | SpendingCreatedAction
  | DeleteSpendingAction
  | SpendingDeletedAction
  | EditSpendingAction
  | SpendingEditedAction
  | HydrateAction