import type {ReportByCategory} from '../types'
import {call, put, takeEvery} from '@redux-saga/core/effects'
import {getError, callError} from 'shared'
import {LoadReportByCategoriesAction, REPORTS_ACTION_TYPES} from '../actions'
import {setReportByCategoriesData} from '../actionCreators'
import {ReportApiService} from '../../api'

export class ReportSagaFactory {
  static create() {
    return [ReportSagaFactory.loadReportByCategoriesWatcher()]
  }

  private static *loadReportByCategoriesWorker({payload}: LoadReportByCategoriesAction) {
    try {
      const cookie = payload.accessToken ? {'cookie': payload.accessToken} : undefined
      const reportByCategories: ReportByCategory[] = yield call(
        ReportApiService.loadReportByCategories,
        payload.startDate,
        payload.endDate,
        cookie,
      )
      yield put(setReportByCategoriesData(reportByCategories))
    } catch (error) {
      yield put(callError(getError(error)))
    }
  }

  private static *loadReportByCategoriesWatcher() {
    yield takeEvery(REPORTS_ACTION_TYPES.LOAD_REPORT_BY_CATEGORIES, ReportSagaFactory.loadReportByCategoriesWorker)
  }
}