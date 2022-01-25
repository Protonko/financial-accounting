import type {Store} from 'redux'
import type {RootState} from '@store/reducers'

export interface StoreService {
  getStore: () => Store<RootState>
}
