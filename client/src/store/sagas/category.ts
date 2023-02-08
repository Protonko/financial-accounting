import type {Category} from 'model'
import {call, put, takeEvery} from '@redux-saga/core/effects'
import {CATEGORY_ACTION_TYPES, LoadCategoriesAction} from 'store/actions/model'
import {callError, setCategoriesData} from '@store/actions'
import {getError} from 'utils'
import {CategoryApiService} from 'services'

export class CategorySagaFactory {
  static create() {
    return [CategorySagaFactory.loadCategoriesWatcher()]
  }

  private static *loadCategoriesWorker({payload}: LoadCategoriesAction) {
    try {
      const cookie = payload ? {'cookie': payload} : undefined
      const categories: Category[] = yield call(
        CategoryApiService.loadCategories,
        cookie,
      )
      yield put(setCategoriesData(categories))
    } catch (error) {
      yield put(callError(getError(error)))
    }
  }

  private static *loadCategoriesWatcher() {
    yield takeEvery(CATEGORY_ACTION_TYPES.LOAD_CATEGORIES, CategorySagaFactory.loadCategoriesWorker)
  }
}