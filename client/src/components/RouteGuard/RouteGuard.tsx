import type {RootState} from '@store/reducers'
import {useEffect, FC, useState} from 'react'
import {useRouter} from 'next/router'
import {useSelector} from 'react-redux'
import {useActions} from 'hooks'
import {CircularProgress} from '@mui/material'

const Loader = () => {
  return <div className="loader"><CircularProgress className="loader__progress" color="inherit" /></div>
}

export const RouteGuard: FC = ({children}) => {
  const router = useRouter()
  const [hasAccess, setHasAccess] = useState(false)
  const {id, email} = useSelector((state: RootState) => state.auth)
  const {getUserInfo} = useActions()

  const preventAccess = () => setHasAccess(false)

  const checkAuth = (path: string) => {
    const authPaths = ['auth', 'sign-up']
    const authorized = !!(id && email)
    const slug = path.split('/').slice(-1)[0]

    if (authorized && authPaths.includes(slug)) {
      const destinationPath = router.pathname.includes('auth') ? 'expenses' : router.asPath
      router.push(destinationPath)
    } else if (!authorized && !authPaths.includes(slug)) {
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

  return hasAccess ? <>{children}</> : <Loader />
}
