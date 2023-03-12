import {DeleteSpendingAction, SPENDING_ACTION_TYPES, SpendingDeletedAction} from 'entities'

export const deleteSpending = (payload: number): DeleteSpendingAction => ({
  type: SPENDING_ACTION_TYPES.DELETE_SPENDING,
  payload,
})

export const spendingDeleted = (payload: number): SpendingDeletedAction => ({
  type: SPENDING_ACTION_TYPES.SPENDING_DELETED,
  payload,
})