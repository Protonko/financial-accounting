import {useDispatch} from 'react-redux'
import {bindActionCreators} from 'redux'
import {loadSpending} from 'entities'

export const useLoadSpending = () => {
  const dispatch = useDispatch()
  return bindActionCreators(loadSpending, dispatch)
}