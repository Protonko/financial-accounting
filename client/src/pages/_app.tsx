import type {AppProps} from 'next/app'
import {ThemeProvider} from 'next-themes'
import '@assets/styles/style.scss'
import {APP_THEME} from 'model'
import {storeWrapper} from 'store'
import {RouteGuard} from '@components/RouteGuard'

const App = ({Component, pageProps}: AppProps) => {
  return (
    <ThemeProvider themes={Object.values(APP_THEME)}>
      <RouteGuard>
        <Component {...pageProps} />
      </RouteGuard>
    </ThemeProvider>
  )
}

export default storeWrapper.withRedux(App)
