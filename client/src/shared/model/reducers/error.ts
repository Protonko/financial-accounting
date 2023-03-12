import {HYDRATE} from 'next-redux-wrapper';
import {AllErrorActions, ERROR_ACTION_TYPES} from '../actions'

export interface InitialState {
  showErrorNotification: boolean
  errorMessage: string | null
}

export const initialState: InitialState = {
  showErrorNotification: false,
  errorMessage: null,
}

const reducers = (state = initialState, action: AllErrorActions): InitialState => {
  switch (action.type) {
    case HYDRATE:
      return {
        ...state,
        ...action.payload.error,
      }

    case ERROR_ACTION_TYPES.SHOW_ERROR_NOTIFICATION:
      return {
        ...state,
        showErrorNotification: true,
        errorMessage: action.payload,
      }

    case ERROR_ACTION_TYPES.HIDE_ERROR_NOTIFICATION:
    default:
      return initialState
  }
}

export default reducers