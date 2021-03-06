import type {
  CreateSpendingBody,
  Spending,
  SpendingFilters,
  SpendingPage,
  UpdateSpendingBody,
} from 'model'
import {
  SPENDING_ACTION_TYPES,
  CreateSpendingAction,
  DeleteSpendingAction,
  EditSpendingAction,
  LoadSpendingAction,
  SetSpendingDataAction,
  SpendingCreatedAction,
  SpendingDeletedAction,
  SpendingEditedAction,
} from './model'

export const loadSpending = (payload: SpendingFilters): LoadSpendingAction => ({
  type: SPENDING_ACTION_TYPES.LOAD_SPENDING,
  payload,
})

export const setSpendingData = (payload: SpendingPage): SetSpendingDataAction => ({
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

export const deleteSpending = (payload: number): DeleteSpendingAction => ({
  type: SPENDING_ACTION_TYPES.DELETE_SPENDING,
  payload,
})

export const spendingDeleted = (payload: number): SpendingDeletedAction => ({
  type: SPENDING_ACTION_TYPES.SPENDING_DELETED,
  payload,
})

export const editSpending = (payload: UpdateSpendingBody): EditSpendingAction => ({
  type: SPENDING_ACTION_TYPES.EDIT_SPENDING,
  payload,
})

export const spendingEdited = (payload: Spending): SpendingEditedAction => ({
  type: SPENDING_ACTION_TYPES.SPENDING_EDITED,
  payload,
})