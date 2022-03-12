import type {Spending, SpendingFilters} from 'model'
import {LoadSpendingAction, SetSpendingDataAction, SPENDING_ACTION_TYPES} from './model'

export const loadSpending = (payload: SpendingFilters): LoadSpendingAction => ({
  type: SPENDING_ACTION_TYPES.LOAD_SPENDING,
  payload,
})

export const setSpendingData = (payload: Spending[]): SetSpendingDataAction => ({
  type: SPENDING_ACTION_TYPES.SET_SPENDING_DATA,
  payload,
})