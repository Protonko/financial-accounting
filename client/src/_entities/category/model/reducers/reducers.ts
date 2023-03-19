import type {Category} from '../types'
import {HYDRATE} from 'next-redux-wrapper'
import {AllCategoriesActions, CATEGORY_ACTION_TYPES} from '../actions'

interface InitialState {
  categories: Category[] | null
}

const initialState: InitialState = {
  categories: null,
}

export interface CategoryReducer {
  categories: InitialState
}

export const categoryReducer = (state = initialState, action: AllCategoriesActions): InitialState => {
  switch (action.type) {
    case HYDRATE:
      return {
        ...state,
        ...action.payload.categories,
      }

    case CATEGORY_ACTION_TYPES.LOAD_CATEGORIES:
      return {
        ...state,
        categories: null,
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
