import type {ReportByCategory, ReportByCategoriesFilters} from 'model'
import {
  LoadReportByCategoriesAction,
  SetReportByCategoriesDataAction,
  REPORTS_ACTION_TYPES,
} from '@store/actions/model'

export const loadReportByCategories = (payload: ReportByCategoriesFilters): LoadReportByCategoriesAction => ({
  type: REPORTS_ACTION_TYPES.LOAD_REPORT_BY_CATEGORIES,
  payload
})

export const setReportByCategoriesData = (payload: ReportByCategory[]): SetReportByCategoriesDataAction => ({
  type: REPORTS_ACTION_TYPES.SET_REPORT_BY_CATEGORIES_DATA,
  payload
})
