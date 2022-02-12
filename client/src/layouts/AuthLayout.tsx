import {FC} from 'react'
import {Header} from 'components'

export const AuthLayout: FC = ({children}) => {
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
