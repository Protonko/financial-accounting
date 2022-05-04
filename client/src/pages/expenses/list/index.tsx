import type {SpendingFilters} from 'model'
import type {RootState} from '@store/reducers'
import {useEffect, useRef} from 'react'
import {useRouter} from 'next/router'
import {useSelector} from 'react-redux'
import {END} from 'redux-saga'
import {SagaStore, storeWrapper} from 'store'
import {loadSpending} from '@store/actions'
import {CookieHandlerSSR, getPaginationParams} from 'utils'
import {PAGE_SIZE} from '@constants'

export const getServerSideProps = storeWrapper.getServerSideProps(async ({store, req, query}) => {
  const cookieHandler = new CookieHandlerSSR(req)
  const accessToken = cookieHandler.setCookie('access_token', cookieHandler.getCookie('access_token'), {HttpOnly: true})
  const filters: SpendingFilters = {
    offset: getPaginationParams(query.offset) ?? 0,
    size: getPaginationParams(query.size) ?? PAGE_SIZE,
    accessToken
  }
  store.dispatch(loadSpending(filters))
  store.dispatch(END)
  await (store as SagaStore).sagaTask?.toPromise()
})

const ExpensesList = () => {
  const router = useRouter()
  const {spending} = useSelector((state: RootState) => state.spending)
  const scrollIndicator = useRef<HTMLDivElement>(null)
  const observer = useRef(new IntersectionObserver(() => console.log('GET')))

  const pushQueryParamsToHistory = () => {
    if (!(router.query.offset && router.query.size)) {
      router.query.offset ??= '0'
      router.query.size ??= PAGE_SIZE.toString()
      router.push(router)
    }
  }

  const createObserver = () => {
    if (scrollIndicator.current) {
      observer.current.observe(scrollIndicator.current)
    }
  }

  useEffect(() => {
    pushQueryParamsToHistory()
    createObserver()
  }, [])

  return (
    <div>
      Expenses List
      <div ref={scrollIndicator} />
    </div>
  )
}

export default ExpensesList