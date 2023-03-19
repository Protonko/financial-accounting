import type {AnyAction} from 'redux'
import type {RootState} from '@store/reducers'
import {HYDRATE} from 'next-redux-wrapper'

export interface HydrateAction extends AnyAction {
  type: typeof HYDRATE,
  payload: RootState,
}
