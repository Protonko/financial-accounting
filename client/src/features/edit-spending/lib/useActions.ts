import {useDispatch} from 'react-redux'
import {bindActionCreators} from 'redux'
import {editSpendingActions} from '../model'

export const useActions = () => {
  const dispatch = useDispatch()
  return bindActionCreators(editSpendingActions, dispatch)
}