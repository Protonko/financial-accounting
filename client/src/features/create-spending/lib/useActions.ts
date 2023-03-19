import {useDispatch} from 'react-redux'
import {bindActionCreators} from 'redux'
import {createSpendingActions} from '../model'

export const useActions = () => {
  const dispatch = useDispatch()
  return bindActionCreators(createSpendingActions, dispatch)
}