import type {FC} from 'react'
import {Header} from 'widgets'

export const MainLayout: FC = ({children}) => {
  return (
    <>
      <Header withTabs />

      <main className="main">
        <div className="container">
          {children}
        </div>
      </main>
    </>
  )
}
