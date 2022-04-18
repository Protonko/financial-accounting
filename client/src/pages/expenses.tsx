import type {NextPage} from 'next'
import {END} from 'redux-saga'
import {SagaStore, storeWrapper} from 'store'
import {getUserInfo, loadCategories, loadSpending} from '@store/actions'
import {CookieHandlerSSR} from 'utils'
import {MainLayout} from 'layouts'
import {SpendingList, CreateSpendingForm} from 'components'

export const getServerSideProps = storeWrapper.getServerSideProps(async ({store, req}) => {
  const cookieHandler = new CookieHandlerSSR(req)
  const accessToken = cookieHandler.setCookie('access_token', cookieHandler.getCookie('access_token'), {HttpOnly: true})

  store.dispatch(getUserInfo(accessToken))
  store.dispatch(loadSpending({page: 0, accessToken}))
  store.dispatch(loadCategories(accessToken))
  store.dispatch(END)
  await (store as SagaStore).sagaTask?.toPromise()
})

const Expenses: NextPage = () => {
  return (
    <MainLayout>
      <div className="expenses">
        <div className="expenses__row">
          <CreateSpendingForm />
        </div>

        <div className="expenses__row">
          <SpendingList />
        </div>
      </div>
    </MainLayout>
  )
}

export default Expenses
