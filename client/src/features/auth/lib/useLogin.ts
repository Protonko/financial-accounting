import {useDispatch} from 'react-redux'
import {bindActionCreators} from 'redux'
import {login} from '../model'

export const useLogin = () => {
  const dispatch = useDispatch()
  return bindActionCreators(login, dispatch)
}