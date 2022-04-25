import type {CreateSpendingBody, Spending, SpendingFilters} from 'model'
import {
  SPENDING_ACTION_TYPES,
  CreateSpendingAction,
  LoadSpendingAction,
  SetSpendingDataAction,
  SpendingCreatedAction,
} from './model'

export const loadSpending = (payload: SpendingFilters): LoadSpendingAction => ({
  type: SPENDING_ACTION_TYPES.LOAD_SPENDING,
  payload,
})

export const setSpendingData = (payload: Spending[]): SetSpendingDataAction => ({
  type: SPENDING_ACTION_TYPES.SET_SPENDING_DATA,
  payload,
})

export const createSpending = (payload: CreateSpendingBody): CreateSpendingAction => ({
  type: SPENDING_ACTION_TYPES.CREATE_SPENDING,
  payload
})

export const spendingCreated = (payload: Spending): SpendingCreatedAction => ({
  type: SPENDING_ACTION_TYPES.SPENDING_CREATED,
  payload
})