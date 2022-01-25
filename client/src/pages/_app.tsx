import type {AppProps} from 'next/app'
import type {StoreService} from '@services/interfaces/StoreService'
import {ThemeProvider} from 'next-themes'
import {Provider} from 'react-redux'
import '@assets/styles/style.scss'
import {APP_THEME} from '@model/app-settings'
import {SERVICE_IDENTIFIER} from '@model/service-identifier'
import {container} from '@config/ioc.config'

const App = ({Component, pageProps}: AppProps) => {
  const store = container.get<StoreService>(SERVICE_IDENTIFIER.STORE_SERVICE).getStore()

  return (
    <Provider store={store}>
      <ThemeProvider themes={Object.values(APP_THEME)}>
        <Component {...pageProps} />
      </ThemeProvider>
    </Provider>
  )
}

export default App
