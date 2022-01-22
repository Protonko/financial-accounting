import type {AppProps} from 'next/app'
import {ThemeProvider} from 'next-themes'
import {Provider} from 'react-redux'
import '@assets/styles/style.scss'
import {APP_THEME} from '@model/app-settings'
import store from 'store'

const App = ({Component, pageProps}: AppProps) => {
  return (
    <Provider store={store}>
      <ThemeProvider themes={Object.values(APP_THEME)}>
        <Component {...pageProps} />
      </ThemeProvider>
    </Provider>
  )
}

export default App
