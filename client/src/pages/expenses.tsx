import type {NextPage} from 'next'
import {END} from 'redux-saga'
import styles from '@assets/styles/Home.module.css'
import {SagaStore, storeWrapper} from 'store'
import {getUserInfo} from '@store/actions'
import {CookieHandlerSSR} from 'utils'
import {MainLayout} from 'layouts'

export const getServerSideProps = storeWrapper.getServerSideProps(async ({store, req}) => {
  const cookieHandler = new CookieHandlerSSR(req)
  const accessToken = cookieHandler.setCookie('access_token', cookieHandler.getCookie('access_token'), {HttpOnly: true})

  store.dispatch(getUserInfo(accessToken))
  store.dispatch(END)
  await (store as SagaStore).sagaTask?.toPromise()
})

const Expenses: NextPage = () => {
  return (
    <MainLayout>
      <div className={styles.container}>
        expenses
      </div>
    </MainLayout>
  )
}

export default Expenses
