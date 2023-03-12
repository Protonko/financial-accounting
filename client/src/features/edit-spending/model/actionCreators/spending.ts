import {Spending, UpdateSpendingBody, EditSpendingAction, SPENDING_ACTION_TYPES, SpendingEditedAction} from 'entities'

export const editSpending = (payload: UpdateSpendingBody): EditSpendingAction => ({
  type: SPENDING_ACTION_TYPES.EDIT_SPENDING,
  payload,
})

export const spendingEdited = (payload: Spending): SpendingEditedAction => ({
  type: SPENDING_ACTION_TYPES.SPENDING_EDITED,
  payload,
})