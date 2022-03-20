import type {NextPage} from 'next'
import {END} from 'redux-saga'
import {SagaStore, storeWrapper} from 'store'
import {getUserInfo, loadSpending} from '@store/actions'
import {CookieHandlerSSR} from 'utils'
import {MainLayout} from 'layouts'
import {SpendingList, Calculator, Input, DatePicker} from 'components'
import {useLocalization} from '@hooks/useLocalization';

export const getServerSideProps = storeWrapper.getServerSideProps(async ({store, req}) => {
  const cookieHandler = new CookieHandlerSSR(req)
  const accessToken = cookieHandler.setCookie('access_token', cookieHandler.getCookie('access_token'), {HttpOnly: true})

  store.dispatch(getUserInfo(accessToken))
  store.dispatch(loadSpending({page: 0, accessToken}))
  store.dispatch(END)
  await (store as SagaStore).sagaTask?.toPromise()
})

const Expenses: NextPage = () => {
  const {lang} = useLocalization()

  return (
    <MainLayout>
      <div className="expenses">
        <div className="expenses__row">
          <div className="expenses__col expenses__col--sm">
            <Calculator />
          </div>
          <div className="expenses__col expenses__col--lg">
            <Input value="" label="" name="comment" placeholder="Comment" className="expenses__input" />
            <DatePicker value="" setValue={() => {}} lang={lang} />
            <div className="expenses__categories">
              Categories
            </div>
          </div>
        </div>

        <div className="expenses__row">
          <SpendingList />
        </div>
      </div>
    </MainLayout>
  )
}

export default Expenses
