import {useEffect, FC, useState} from 'react'
import {useRouter} from 'next/router'
import {useSelector} from 'react-redux'
import {CircularProgress} from '@mui/material'
import {AuthReducer, useGetUserInfo} from 'entities'

const Loader = () => {
  return <div className="loader"><CircularProgress className="loader__progress" color="inherit" /></div>
}

export const RouteGuard: FC = ({children}) => {
  const router = useRouter()
  const [hasAccess, setHasAccess] = useState(false)
  const {id, email} = useSelector((state: AuthReducer) => state.auth)
  const getUserInfo = useGetUserInfo()

  const preventAccess = () => setHasAccess(false)

  const checkAuth = (path: string) => {
    const authPaths = ['auth', 'sign-up']
    const authorized = !!(id && email)
    const slug = path.split('/').slice(-1)[0]

    if (authorized && authPaths.includes(slug)) {
      const destinationPath = path.includes('auth') ? 'expenses' : router.asPath
      router.push(destinationPath)
    } else if (!authorized && !authPaths.includes(slug)) {
      router.push({pathname: '/auth'})
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

  return hasAccess ? <>{children}</> : <Loader />
}
