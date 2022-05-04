import type {Spending, SpendingGroupedByDate} from 'model'
import {HYDRATE} from 'next-redux-wrapper'
import {AllSpendingActions, SPENDING_ACTION_TYPES} from 'store/actions/model'

export interface InitialState {
  spending: Spending[] | null,
  spendingGroupedByDate: SpendingGroupedByDate | null,
  count: number,
  countGroupedByDate: number,
}

export const initialState: InitialState = {
  spending: null,
  spendingGroupedByDate: null,
  count: 0,
  countGroupedByDate: 0,
}

const reducers = (state = initialState, action: AllSpendingActions): InitialState => {
  switch (action.type) {
    case HYDRATE:
      return {
        ...state,
        ...action.payload.spending,
      }

    case SPENDING_ACTION_TYPES.SET_SPENDING_DATA:
      return {
        ...state,
        spending: action.payload.data,
        count: action.payload.count
      }

    case SPENDING_ACTION_TYPES.SET_SPENDING_GROUPED_BY_DATE_DATA:
      return {
        ...state,
        spendingGroupedByDate: action.payload.data,
        countGroupedByDate: action.payload.count,
      }

    case SPENDING_ACTION_TYPES.RESET_SPENDING_GROUPED_BY_DATE:
      return {
        ...state,
        spendingGroupedByDate: null,
        countGroupedByDate: 0,
      }


    case SPENDING_ACTION_TYPES.SPENDING_CREATED:
      return {
        ...state,
        spending: [...(state.spending ?? []), action.payload]
      }

    case SPENDING_ACTION_TYPES.SPENDING_DELETED: {
      const updatedSpending = (state.spending ?? []).filter(({id}) => id !== action.payload)
      return {
        ...state,
        spending: updatedSpending,
      }
    }

    case SPENDING_ACTION_TYPES.SPENDING_EDITED: {
      const updatedSpending = (state.spending ?? []).map(spending => {
        if (spending.id === action.payload.id) {
          return action.payload
        } else {
          return spending
        }
      })

      return {
        ...state,
        spending: updatedSpending,
      }
    }

    default:
      return state

  }
}

export default reducers