import {useDispatch} from 'react-redux'
import {bindActionCreators} from 'redux'
import {loadSpending} from '_entities'

export const useLoadSpending = () => {
  const dispatch = useDispatch()
  return bindActionCreators(loadSpending, dispatch)
}