import type {NextPage} from 'next'
import {END} from 'redux-saga'
import {SagaStore, storeWrapper} from 'app'
import {MainLayout} from 'layouts'
import {SpendingList} from 'widgets'
import {CreateSpendingForm} from 'features'
import {getUserInfo, loadCategories, loadSpending, SpendingFilters} from '_entities'
import {CookieHandlerSSR, PAGE_SIZE} from 'shared'

export const getServerSideProps = storeWrapper.getServerSideProps(async ({store, req}) => {
  const cookieHandler = new CookieHandlerSSR(req)
  const accessToken = cookieHandler.setCookie('access_token', cookieHandler.getCookie('access_token'), {HttpOnly: true})
  const filters: SpendingFilters = {
    offset: 0,
    size: PAGE_SIZE,
    accessToken
  }
  store.dispatch(getUserInfo(accessToken))
  store.dispatch(loadSpending(filters))
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
