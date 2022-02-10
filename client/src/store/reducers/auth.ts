import {AllAuthActions, AUTH_ACTION_TYPES} from 'store/actions/model'
import {HYDRATE} from 'next-redux-wrapper'

export interface InitialState {
  id: null | string,
  email: null | string,
  fullName: null | string,
}

export const initialState = {
  id: null,
  email: null,
  fullName: null,
} as InitialState

const reducers = (
  state = initialState,
  action: AllAuthActions,
): InitialState => {
  switch (action.type) {
    case HYDRATE:
      return {
        ...state
        // ...action.payload.auth,
      }

    case AUTH_ACTION_TYPES.SET_USER_DATA:
      return {
        ...state,
        ...action.payload
      }

    case AUTH_ACTION_TYPES.ERROR_LOGIN:
      return initialState

    default:
      return state
  }
}

export default reducers
