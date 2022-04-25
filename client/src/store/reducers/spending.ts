import type {Spending} from 'model'
import {HYDRATE} from 'next-redux-wrapper'
import {AllSpendingActions, SPENDING_ACTION_TYPES} from 'store/actions/model'

export interface InitialState {
  spending: Spending[] | null,
}

export const initialState: InitialState = {
  spending: null
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
        spending: action.payload,
      }

    case SPENDING_ACTION_TYPES.SPENDING_CREATED:
      return {
        spending: [...(state.spending ?? []), action.payload]
      }

    default:
      return state

  }
}

export default reducers