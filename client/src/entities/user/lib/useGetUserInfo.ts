import {useDispatch} from 'react-redux'
import {bindActionCreators} from 'redux'
import {getUserInfo} from '../model'

export const useGetUserInfo = () => {
  const dispatch = useDispatch()
  return bindActionCreators(getUserInfo, dispatch)
}