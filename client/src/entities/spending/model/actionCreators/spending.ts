import type {SpendingFilters, SpendingPage} from '../types'
import {LoadSpendingAction, SetSpendingDataAction, SPENDING_ACTION_TYPES} from '../actions'

export const loadSpending = (payload: SpendingFilters): LoadSpendingAction => ({
  type: SPENDING_ACTION_TYPES.LOAD_SPENDING,
  payload,
})

export const setSpendingData = (payload: SpendingPage): SetSpendingDataAction => ({
  type: SPENDING_ACTION_TYPES.SET_SPENDING_DATA,
  payload,
})