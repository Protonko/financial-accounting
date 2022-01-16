import {FC} from 'react'
import {Header} from '../components/Header'

export const AuthLayout: FC = ({children}) => {
  return (
    <>
      <Header />


      <main>
        {children}
      </main>
    </>
  )
}
