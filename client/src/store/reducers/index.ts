import {combineReducers} from 'redux'
import auth from './auth'
import categories from './category'
import error from './error'
import spending from './spending'

export const rootReducer = combineReducers({
  auth,
  categories,
  error,
  spending,
})

export type RootState = ReturnType<typeof rootReducer>
