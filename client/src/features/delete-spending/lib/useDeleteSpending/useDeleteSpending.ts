import {useDispatch} from 'react-redux'
import {bindActionCreators} from 'redux'
import {deleteSpending} from '../../model'

export const useDeleteSpending = () => {
  const dispatch = useDispatch()
  return bindActionCreators(deleteSpending, dispatch)
}