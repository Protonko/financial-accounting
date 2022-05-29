import type {SpendingFilters} from 'model'
import {END} from 'redux-saga'
import {SagaStore, storeWrapper} from 'store'
import {CookieHandlerSSR} from 'utils'
import {PAGE_SIZE} from '@constants'
import {MainLayout} from 'layouts'
import {SpendingGroupedByDateList} from 'components'
import {loadCategories, loadSpending} from '@store/actions'

export const getServerSideProps = storeWrapper.getServerSideProps(async ({store, req}) => {
  const cookieHandler = new CookieHandlerSSR(req)
  const accessToken = cookieHandler.setCookie('access_token', cookieHandler.getCookie('access_token'), {HttpOnly: true})
  const filters: SpendingFilters = {
    offset: 0,
    size: PAGE_SIZE,
    accessToken
  }
  store.dispatch(loadSpending(filters))
  store.dispatch(loadCategories(accessToken))
  store.dispatch(END)
  await (store as SagaStore).sagaTask?.toPromise()
})

const ExpensesList = () => {
  return (
    <MainLayout>
      <SpendingGroupedByDateList />
    </MainLayout>
  )
}

export default ExpensesList