import {AllReportsActions, REPORTS_ACTION_TYPES} from '@store/actions/model'
import {ReportByCategory} from '@model/report'
import {HYDRATE} from 'next-redux-wrapper'

export interface InitialState {
  reportByCategories: ReportByCategory[] | null
  loading: boolean
}

export const initialState: InitialState = {
  reportByCategories: null,
  loading: false
}

const reducers = (state = initialState, action: AllReportsActions): InitialState => {
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

export default reducers