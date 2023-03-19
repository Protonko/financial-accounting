import type {Category} from '../types'
import {CATEGORY_ACTION_TYPES, LoadCategoriesAction, SetCategoriesDataAction} from '../actions'

export const loadCategories = (payload: string): LoadCategoriesAction => ({
  type: CATEGORY_ACTION_TYPES.LOAD_CATEGORIES,
  payload,
})

export const setCategoriesData = (payload: Category[]): SetCategoriesDataAction => ({
  type: CATEGORY_ACTION_TYPES.SET_CATEGORIES_DATA,
  payload,
})