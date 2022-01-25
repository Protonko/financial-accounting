import type {StoreService} from '@services/interfaces/StoreService'
import type {EpicFactory} from '@services/interfaces/EpicFactory'
import 'reflect-metadata'
import {Container} from 'inversify'
import {SERVICE_IDENTIFIER} from '@model/service-identifier'
import {StoreServiceImpl} from 'store'
import {RootEpicFactory} from '@store/epic'

const container = new Container()

container.bind<StoreService>(SERVICE_IDENTIFIER.STORE_SERVICE).to(StoreServiceImpl).inSingletonScope()
container.bind<EpicFactory>(SERVICE_IDENTIFIER.ROOT_EPIC_FACTORY).to(RootEpicFactory).inSingletonScope()

export {container}
