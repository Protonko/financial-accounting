import {AllAuthActions, AUTH_ACTION_TYPES} from 'store/actions/model'

export interface InitialState {
  accessToken: null | string,
  email: null | string,
}

export const initialState = {
  accessToken: null,
  email: null,
} as InitialState

const reducers = (
  state = initialState,
  action: AllAuthActions,
): InitialState => {
  switch (action.type) {
    case AUTH_ACTION_TYPES.SET_USER_DATA:
      return {
        ...state,
        ...action.payload,
      }

    default:
      return state
  }
}

export default reducers
