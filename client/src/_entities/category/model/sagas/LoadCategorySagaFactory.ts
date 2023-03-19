import type {Category} from '../types'
import {call, put, takeEvery} from '@redux-saga/core/effects'
import {getError, callError} from 'shared'
import {CATEGORY_ACTION_TYPES, LoadCategoriesAction} from '../actions'
import {setCategoriesData} from '../actionCreators'
import {LoadCategoryApiService} from '../../api'

export class LoadCategorySagaFactory {
  static create() {
    return [LoadCategorySagaFactory.loadCategoriesWatcher()]
  }

  private static *loadCategoriesWorker({payload}: LoadCategoriesAction) {
    try {
      const cookie = payload ? {'cookie': payload} : undefined
      const categories: Category[] = yield call(
        LoadCategoryApiService.loadCategories,
        cookie,
      )
      yield put(setCategoriesData(categories))
    } catch (error) {
      yield put(callError(getError(error)))
    }
  }

  private static *loadCategoriesWatcher() {
    yield takeEvery(CATEGORY_ACTION_TYPES.LOAD_CATEGORIES, LoadCategorySagaFactory.loadCategoriesWorker)
  }
}