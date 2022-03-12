import {combineReducers} from 'redux'
import auth from './auth'
import error from './error'
import spending from './spending'

export const rootReducer = combineReducers({
  auth,
  error,
  spending,
})

export type RootState = ReturnType<typeof rootReducer>
