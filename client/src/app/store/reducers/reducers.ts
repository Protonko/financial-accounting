import {combineReducers} from 'redux'
import {authReducer, categoryReducer, spendingReducer, reportReducer} from '_entities'
import {errorReducer} from 'shared'

export const rootReducer = combineReducers({
  auth: authReducer,
  categories: categoryReducer,
  error: errorReducer,
  spending: spendingReducer,
  report: reportReducer,
})

export type RootState = ReturnType<typeof rootReducer>
