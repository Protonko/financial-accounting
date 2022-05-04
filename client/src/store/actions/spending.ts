import type {
  CreateSpendingBody,
  Spending,
  SpendingFilters,
  SpendingGroupedByDatePage,
  SpendingPage,
  UpdateSpendingBody,
} from 'model'
import {
  SPENDING_ACTION_TYPES,
  CreateSpendingAction,
  DeleteSpendingAction,
  EditSpendingAction,
  LoadSpendingAction,
  LoadSpendingGroupedByDateAction,
  SetSpendingDataAction,
  SetSpendingGroupedByDateDataAction,
  SpendingCreatedAction,
  SpendingDeletedAction,
  SpendingEditedAction,
  ResetSpendingGroupedByDateAction,
} from './model'

export const loadSpending = (payload: SpendingFilters): LoadSpendingAction => ({
  type: SPENDING_ACTION_TYPES.LOAD_SPENDING,
  payload,
})

export const loadSpendingGroupedByDate = (payload: SpendingFilters): LoadSpendingGroupedByDateAction => ({
  type: SPENDING_ACTION_TYPES.LOAD_SPENDING_GROUPED_BY_DATE,
  payload,
})

export const resetSpendingGroupedByDate = (): ResetSpendingGroupedByDateAction => ({
  type: SPENDING_ACTION_TYPES.RESET_SPENDING_GROUPED_BY_DATE,
})

export const setSpendingGroupedByDateData = (payload: SpendingGroupedByDatePage): SetSpendingGroupedByDateDataAction => ({
  type: SPENDING_ACTION_TYPES.SET_SPENDING_GROUPED_BY_DATE_DATA,
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