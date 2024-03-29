import type {AnyAction} from 'redux'
import type {RootState} from 'app'
import {HYDRATE} from 'next-redux-wrapper'

export interface HydrateAction extends AnyAction {
  type: typeof HYDRATE,
  payload: RootState,
}
