import type {AnyAction} from 'redux'
import type {Spending, SpendingFilters} from 'model'
import type {HydrateAction} from './hydrate';

export enum SPENDING_ACTION_TYPES {
  LOAD_SPENDING = 'LOAD_SPENDING',
  SET_SPENDING_DATA = 'SET_SPENDING_DATA',
}

export interface LoadSpendingAction extends AnyAction {
  type: SPENDING_ACTION_TYPES.LOAD_SPENDING,
  payload: SpendingFilters,
}

export interface SetSpendingDataAction extends AnyAction {
  type: SPENDING_ACTION_TYPES.SET_SPENDING_DATA,
  payload: Spending[],
}

export type AllSpendingActions =
  | LoadSpendingAction
  | SetSpendingDataAction
  | HydrateAction