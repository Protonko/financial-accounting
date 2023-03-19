import {HYDRATE} from 'next-redux-wrapper'
import {AllReportsActions, REPORTS_ACTION_TYPES} from '../actions'
import {ReportByCategory} from '../types'

interface InitialState {
  reportByCategories: ReportByCategory[] | null
  loading: boolean
}

const initialState: InitialState = {
  reportByCategories: null,
  loading: false
}

export interface ReportReducer {
  report: InitialState
}

export const reportReducer = (state = initialState, action: AllReportsActions): InitialState => {
  switch (action.type) {
    case HYDRATE:
      return {
        ...state,
        ...action.payload.report,
      }

    case REPORTS_ACTION_TYPES.LOAD_REPORT_BY_CATEGORIES:
      return {
        ...state,
        loading: true,
      }

    case REPORTS_ACTION_TYPES.SET_REPORT_BY_CATEGORIES_DATA:
      return {
        ...state,
        reportByCategories: action.payload,
        loading: false,
      }

    default:
      return state
  }
}
