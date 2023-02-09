import type {NextPage} from 'next'
import type {ReportByCategoriesFilters} from 'model'
import {END} from 'redux-saga'
import {SagaStore, storeWrapper} from 'store'
import {getUserInfo, loadCategories, loadReportByCategories} from '@store/actions'
import {MainLayout} from 'layouts'
import {CookieHandlerSSR, DateUtils, getQueryParam} from 'utils'
import {ReportChart, ReportFilters, ReportListInfo} from 'components'

interface Props {
  startDate: string,
  endDate: string,
}

export const getServerSideProps = storeWrapper.getServerSideProps(async ({store, req, query}) => {
  const cookieHandler = new CookieHandlerSSR(req)
  const accessToken = cookieHandler.setCookie('access_token', cookieHandler.getCookie('access_token'), {HttpOnly: true})
  const startDateQueryParam = getQueryParam(query.startDate)
  const endDateQueryParam = getQueryParam(query.endDate)

  let startDate = DateUtils.getFirstLocalDateOfMonth()
  let endDate = DateUtils.getLastLocalDateOfMonth()

  if (startDateQueryParam && DateUtils.validateLocalDate(startDateQueryParam)) {
    startDate = startDateQueryParam
  }

  if (endDateQueryParam && DateUtils.validateLocalDate(endDateQueryParam)) {
    endDate = endDateQueryParam
  }

  const filters: ReportByCategoriesFilters = {
    startDate,
    endDate,
    accessToken
  }
  store.dispatch(getUserInfo(accessToken))
  store.dispatch(loadReportByCategories(filters))
  store.dispatch(loadCategories(accessToken))
  store.dispatch(END)
  await (store as SagaStore).sagaTask?.toPromise()

  return {
    props: {
      startDate,
      endDate,
    },
  };
})

const Reports: NextPage<Props> = ({startDate, endDate}) => {
  return (
    <MainLayout>
      <ReportFilters startDate={startDate} endDate={endDate} />
      <div className="reports">
        <ReportChart />
        <ReportListInfo />
      </div>
    </MainLayout>
  )
}

export default Reports