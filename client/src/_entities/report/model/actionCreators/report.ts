import type {ReportByCategoriesFilters, ReportByCategory} from '../types'
import {LoadReportByCategoriesAction, REPORTS_ACTION_TYPES, SetReportByCategoriesDataAction} from '../actions'

export const loadReportByCategories = (payload: ReportByCategoriesFilters): LoadReportByCategoriesAction => ({
  type: REPORTS_ACTION_TYPES.LOAD_REPORT_BY_CATEGORIES,
  payload
})

export const setReportByCategoriesData = (payload: ReportByCategory[]): SetReportByCategoriesDataAction => ({
  type: REPORTS_ACTION_TYPES.SET_REPORT_BY_CATEGORIES_DATA,
  payload
})
