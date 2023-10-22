import {HYDRATE} from 'next-redux-wrapper'
import type {Spending} from '../types'
import {AllSpendingActions, SPENDING_ACTION_TYPES} from '../actions'

interface InitialState {
  spending: Spending[] | null,
  count: number,
  loading: boolean,
}

export interface SpendingReducer {
  spending: InitialState
}

const initialState: InitialState = {
  spending: null,
  count: 0,
  loading: false,
}

export const spendingReducer = (state = initialState, action: AllSpendingActions): InitialState => {
  switch (action.type) {
    case HYDRATE:
      return {
        ...state,
        ...action.payload.spending,
      }

    case SPENDING_ACTION_TYPES.LOAD_SPENDING:
      return {
        ...state,
        loading: true,
      }

    case SPENDING_ACTION_TYPES.SET_SPENDING_DATA:
      return {
        ...state,
        spending: [...(state.spending ?? []), ...action.payload.data],
        count: action.payload.count,
        loading: false,
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
