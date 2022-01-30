import {combineReducers, Reducer} from 'redux'
import auth from './auth'
import {HYDRATE} from 'next-redux-wrapper'
import {AllAuthActions} from '@store/actions/model'
import {HydrateAction} from '@store/actions/model/hydrate'

const rootReducer = combineReducers({
  auth,
})

export const reducer: Reducer<RootState, AllActions> = (state, action) => {
  if (action.type === HYDRATE) {
    return {
      ...state,
      ...action.payload,
    }
  } else {
    return rootReducer(state, action)
  }
}

export type RootState = ReturnType<typeof rootReducer>
export type AllActions =
  | AllAuthActions
  | HydrateAction
