import type {Category} from 'model'
import {HYDRATE} from 'next-redux-wrapper'
import {CATEGORY_ACTION_TYPES} from 'store/actions/model'

export interface InitialState {
  categories?: Category[]
}

export const initialState: InitialState = {}

const reducer = (state = initialState, action: any): InitialState => {
  switch (action.type) {
    case HYDRATE:
      return {
        ...state,
        ...action.payload.categories,
      }

    case CATEGORY_ACTION_TYPES.LOAD_CATEGORIES:
      return {
        ...state,
        categories: undefined,
      }

    case CATEGORY_ACTION_TYPES.SET_CATEGORIES_DATA:
      return {
        ...state,
        categories: action.payload,
      }

    default:
      return state
  }
}

export default reducer