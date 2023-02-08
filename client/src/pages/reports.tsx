import type {NextPage} from 'next'
import {END} from 'redux-saga'
import {SagaStore, storeWrapper} from 'store'
import {getUserInfo, loadCategories, loadReportByCategories} from '@store/actions'
import {MainLayout} from 'layouts'
import {CookieHandlerSSR} from 'utils'
import {ReportByCategoriesFilters} from 'model'
import {ReportChart, ReportFilters} from 'components'

export const getServerSideProps = storeWrapper.getServerSideProps(async ({store, req}) => {
  const cookieHandler = new CookieHandlerSSR(req)
  const accessToken = cookieHandler.setCookie('access_token', cookieHandler.getCookie('access_token'), {HttpOnly: true})
  const filters: ReportByCategoriesFilters = {
    startDate: '2022-01-01',
    endDate: '2022-05-05',
    accessToken
  }
  store.dispatch(getUserInfo(accessToken))
  store.dispatch(loadReportByCategories(filters))
  store.dispatch(loadCategories(accessToken))
  store.dispatch(END)
  await (store as SagaStore).sagaTask?.toPromise()
})

const Reports: NextPage = () => {
  return (
    <MainLayout>
      <ReportFilters startDate="2022-01-01" endDate="2022-05-05" />
      <ReportChart />
    </MainLayout>
  )
}

export default Reports