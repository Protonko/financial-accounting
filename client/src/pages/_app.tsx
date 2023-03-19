import type {AppProps} from 'next/app'
import Head from 'next/head'
import {ThemeProvider} from 'next-themes'
import '@assets/styles/style.scss'
import {storeWrapper, ErrorBoundary, RouteGuard} from 'app'
import {APP_THEME} from 'shared'

const App = ({Component, pageProps}: AppProps) => {
  return (
    <>
      <Head>
        <title>Financial Accounting</title>
        <meta name='viewport' content='minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover' />
        <meta name='application-name' content='Financial accounting' />
        <meta name='apple-mobile-web-app-capable' content='yes' />
        <meta name='apple-mobile-web-app-status-bar-style' content='default' />
        <meta name='apple-mobile-web-app-title' content='FinAcc' />
        <meta name='description' content='Handy app to track your finance' />
        <meta name='format-detection' content='telephone=no' />
        <meta name='mobile-web-app-capable' content='yes' />
        <meta name='msapplication-config' content='/icons/browserconfig.xml' />
        <meta name='msapplication-TileColor' content='#01322A' />
        <meta name='msapplication-tap-highlight' content='no' />
        <meta name='theme-color' content='#006957' />

        <link rel='apple-touch-icon' href='/icons/touch-icon-iphone.png' />
        <link rel='apple-touch-icon' sizes='152x152' href='/icons/touch-icon-ipad.png' />
        <link rel='apple-touch-icon' sizes='180x180' href='/icons/touch-icon-iphone.png' />
        <link rel='apple-touch-icon' sizes='167x167' href='/icons/touch-icon-ipad-retina.png' />

        <link rel='icon' type='image/png' sizes='32x32' href='/icons/favicon-32x32.png' />
        <link rel='icon' type='image/png' sizes='16x16' href='/icons/favicon-16x16.png' />
        <link rel='manifest' href='/manifest.json' />
        <link rel='mask-icon' href='/icons/safari-pinned-tab.svg' color='#01322A' />
        <link rel='shortcut icon' href='/favicon.ico' />

        <meta property='og:type' content='website' />
        <meta property='og:title' content='Financial accounting' />
        <meta property='og:description' content='Handy app to track your finance' />
        <meta property='og:site_name' content='Financial accounting' />
        {/*<meta property='og:url' content='https://yourdomain.com' />*/}
        {/*<meta property='og:image' content='https://yourdomain.com/icons/apple-touch-icon.png' />*/}
      </Head>
      <ErrorBoundary>
        <ThemeProvider themes={Object.values(APP_THEME)}>
          <RouteGuard>
            <Component {...pageProps} />
          </RouteGuard>
        </ThemeProvider>
      </ErrorBoundary>
    </>
  )
}

export default storeWrapper.withRedux(App)
