import {useDispatch} from 'react-redux'
import {bindActionCreators} from 'redux'
import {signUp} from '../model'

export const useSignUp = () => {
  const dispatch = useDispatch()
  return bindActionCreators(signUp, dispatch)
}