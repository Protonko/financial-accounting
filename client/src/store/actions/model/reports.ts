import type {AnyAction} from 'redux'
import type {ReportByCategory, ReportByCategoriesFilters} from 'model'
import type {HydrateAction} from '@store/actions/model'

export enum REPORTS_ACTION_TYPES {
  LOAD_REPORT_BY_CATEGORIES = 'LOAD_REPORT_BY_CATEGORIES',
  SET_REPORT_BY_CATEGORIES_DATA = 'SET_REPORT_BY_CATEGORIES_DATA',
}

export interface LoadReportByCategoriesAction extends AnyAction {
  type: REPORTS_ACTION_TYPES.LOAD_REPORT_BY_CATEGORIES,
  payload: ReportByCategoriesFilters,
}

export interface SetReportByCategoriesDataAction extends AnyAction {
  type: REPORTS_ACTION_TYPES.SET_REPORT_BY_CATEGORIES_DATA,
  payload: ReportByCategory[],
}

export type AllReportsActions =
  | LoadReportByCategoriesAction
  | SetReportByCategoriesDataAction
  | HydrateAction