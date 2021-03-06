import type {FC} from 'react'
import {Header, HeaderTabs} from 'components'

export const MainLayout: FC = ({children}) => {
  return (
    <>
      <Header renderTabs={() => <HeaderTabs />} />

      <main className="main main--auth">
        <div className="container">
          {children}
        </div>
      </main>
    </>
  )
}
