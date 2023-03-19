import {
  CreateSpendingBody,
  Spending,
  CreateSpendingAction,
  SPENDING_ACTION_TYPES,
  SpendingCreatedAction,
} from '_entities'

export const createSpending = (payload: CreateSpendingBody): CreateSpendingAction => ({
  type: SPENDING_ACTION_TYPES.CREATE_SPENDING,
  payload
})

export const spendingCreated = (payload: Spending): SpendingCreatedAction => ({
  type: SPENDING_ACTION_TYPES.SPENDING_CREATED,
  payload
})