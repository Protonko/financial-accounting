import {combineEpics} from 'redux-observable'
import {AuthEpicFactory} from '@store/epic/auth'

export const rootEpic = combineEpics(
  new AuthEpicFactory().create(),
)
