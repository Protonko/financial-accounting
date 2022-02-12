import type {RootState} from '@store/reducers'
import {useEffect, FC, useState} from 'react'
import {useRouter} from 'next/router'
import {useSelector} from 'react-redux'
import {useActions} from '@hooks/useActions'

export const RouteGuard: FC = ({children}) => {
  const router = useRouter()
  const [hasAccess, setHasAccess] = useState(false)
  const {id, email} = useSelector((state: RootState) => state.auth)
  const {getUserInfo} = useActions()

  const preventAccess = () => setHasAccess(false)

  const checkAuth = (path: string) => {
    const authPath = '/auth'
    const authorized = !!(id && email)

    if (authorized && path.includes(authPath)) {
      router.push('/')
    } else if (!authorized && !path.includes(authPath)) {
      router.push('/auth')
    } else {
      setHasAccess(true)
    }
  }

  useEffect(() => {
    if (!id || !email) {
      getUserInfo()
    }
  }, [])

  useEffect(() => {
    checkAuth(router.asPath)

    router.events.on('routeChangeStart', preventAccess)
    router.events.on('routeChangeComplete', checkAuth)

    return () => {
      router.events.off('routeChangeStart', preventAccess)
      router.events.off('routeChangeComplete', checkAuth)
    }
  }, [id, email])

  return hasAccess ? <>{children}</> : <span>loading...</span> // TODO: Fix loading
}
