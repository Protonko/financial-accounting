import type {EpicFactory} from '@services/interfaces/EpicFactory'
import {combineEpics, Epic} from 'redux-observable'
import {injectable, multiInject} from 'inversify'
import {SERVICE_IDENTIFIER} from '@model/service-identifier'

export const rootEpic = combineEpics()

@injectable()
export class RootEpicFactory implements EpicFactory {
  constructor(@multiInject(SERVICE_IDENTIFIER.EPIC_FACTORY) private factories: EpicFactory[]) {}

  create(): Epic {
    return combineEpics(...this.factories.map(item => item.create()))
  }
}
