import type {SpendingFilters} from 'model'
import {useEffect} from 'react'
import {useRouter} from 'next/router'
import {END} from 'redux-saga'
import {SagaStore, storeWrapper} from 'store'
import {CookieHandlerSSR, getPaginationParams} from 'utils'
import {PAGE_SIZE} from '@constants'
import {MainLayout} from 'layouts'
import {SpendingGroupedByDateList} from 'components'
import {loadCategories, loadSpending} from '@store/actions'

export const getServerSideProps = storeWrapper.getServerSideProps(async ({store, req, query}) => {
  const cookieHandler = new CookieHandlerSSR(req)
  const accessToken = cookieHandler.setCookie('access_token', cookieHandler.getCookie('access_token'), {HttpOnly: true})
  const page = getPaginationParams(query.page) ?? 0
  const filters: SpendingFilters = {
    offset: page * PAGE_SIZE,
    size: PAGE_SIZE * (page || 1),
    accessToken
  }
  store.dispatch(loadSpending(filters))
  store.dispatch(loadCategories(accessToken))
  store.dispatch(END)
  await (store as SagaStore).sagaTask?.toPromise()
})

const ExpensesList = () => {
  const router = useRouter()

  useEffect(() => {
    if (!(router.query.page)) {
      router.push({query: {page: 0}})
    }
  }, [])

  return (
    <MainLayout>
      <SpendingGroupedByDateList />
    </MainLayout>
  )
}

export default ExpensesList