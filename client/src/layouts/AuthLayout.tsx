import type {RootState} from '@store/reducers'
import {useEffect, FC} from 'react'
import {useSelector} from 'react-redux'
import {useRouter} from 'next/router'
import {Header} from 'components'

export const AuthLayout: FC = ({children}) => {
  const {accessToken} = useSelector((state: RootState) => state.auth)
  const router = useRouter()

  useEffect(() => {
    if (accessToken) {
      router.push('/')
    }
  }, [accessToken])

  return (
    <>
      <Header />

      <main className="main main--auth">
        <div className="container">
          {children}
        </div>
      </main>
    </>
  )
}
