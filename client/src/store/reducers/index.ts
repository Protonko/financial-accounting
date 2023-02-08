import {combineReducers} from 'redux'
import auth from './auth'
import categories from './category'
import error from './error'
import spending from './spending'
import report from './report'

export const rootReducer = combineReducers({
  auth,
  categories,
  error,
  spending,
  report,
})

export type RootState = ReturnType<typeof rootReducer>
