import type {Epic} from 'redux-observable'

export interface EpicFactory {
  create: () => Epic
}
