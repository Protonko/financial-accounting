import type {NextPage} from 'next'
import {END} from 'redux-saga'
import {SagaStore, storeWrapper} from 'store'
import {getUserInfo, loadSpending} from '@store/actions'
import {CookieHandlerSSR} from 'utils'
import {MainLayout} from 'layouts'
import {SpendingList, Calculator} from 'components';

export const getServerSideProps = storeWrapper.getServerSideProps(async ({store, req}) => {
  const cookieHandler = new CookieHandlerSSR(req)
  const accessToken = cookieHandler.setCookie('access_token', cookieHandler.getCookie('access_token'), {HttpOnly: true})

  store.dispatch(getUserInfo(accessToken))
  store.dispatch(loadSpending({page: 0, accessToken}))
  store.dispatch(END)
  await (store as SagaStore).sagaTask?.toPromise()
})

const Expenses: NextPage = () => {
  return (
    <MainLayout>
      <div className="expenses">
        <div className="expenses__row">
          <div className="expenses__col expenses__col--sm">
            <Calculator />
          </div>
          <div className="expenses__col expenses__col--lg">
            <SpendingList />
          </div>
        </div>
      </div>
    </MainLayout>
  )
}

export default Expenses
