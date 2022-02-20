import type {AppProps} from 'next/app'
import {ThemeProvider} from 'next-themes'
import '@assets/styles/style.scss'
import {APP_THEME} from 'model'
import {storeWrapper} from 'store'
import {ErrorBoundary, RouteGuard} from 'components';

const App = ({Component, pageProps}: AppProps) => {
  return (
    <ErrorBoundary>
        <ThemeProvider themes={Object.values(APP_THEME)}>
            <RouteGuard>
                <Component {...pageProps} />
            </RouteGuard>
        </ThemeProvider>
    </ErrorBoundary>
  )
}

export default storeWrapper.withRedux(App)
