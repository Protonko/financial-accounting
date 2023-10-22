import type {AnyAction} from 'redux'
import type {HydrateAction} from 'shared'
import type {Category} from '../types'

export enum CATEGORY_ACTION_TYPES {
  LOAD_CATEGORIES = 'LOAD_CATEGORIES',
  SET_CATEGORIES_DATA = 'SET_CATEGORIES_DATA',
}

export interface LoadCategoriesAction extends AnyAction {
  type: CATEGORY_ACTION_TYPES.LOAD_CATEGORIES,
  payload: string,
}

export interface SetCategoriesDataAction extends AnyAction {
  type: CATEGORY_ACTION_TYPES.SET_CATEGORIES_DATA,
  payload: Category[]
}

export type AllCategoriesActions =
  | LoadCategoriesAction
  | SetCategoriesDataAction
  | HydrateAction