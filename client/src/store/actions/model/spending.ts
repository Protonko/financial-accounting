import type {AnyAction} from 'redux'
import type {CreateSpendingBody, Spending, SpendingFilters} from 'model'
import type {HydrateAction} from './hydrate'

export enum SPENDING_ACTION_TYPES {
  LOAD_SPENDING = 'LOAD_SPENDING',
  SET_SPENDING_DATA = 'SET_SPENDING_DATA',
  CREATE_SPENDING = 'CREATE_SPENDING',
  SPENDING_CREATED = 'SPENDING_CREATED',
}

export interface LoadSpendingAction extends AnyAction {
  type: SPENDING_ACTION_TYPES.LOAD_SPENDING,
  payload: SpendingFilters,
}

export interface SetSpendingDataAction extends AnyAction {
  type: SPENDING_ACTION_TYPES.SET_SPENDING_DATA,
  payload: Spending[],
}

export interface CreateSpendingAction extends AnyAction {
  type: SPENDING_ACTION_TYPES.CREATE_SPENDING,
  payload: CreateSpendingBody,
}

export interface SpendingCreatedAction extends AnyAction {
  type: SPENDING_ACTION_TYPES.SPENDING_CREATED,
  payload: Spending,
}

export type AllSpendingActions =
  | LoadSpendingAction
  | SetSpendingDataAction
  | CreateSpendingAction
  | SpendingCreatedAction
  | HydrateAction