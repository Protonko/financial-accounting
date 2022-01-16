import type { AppProps } from 'next/app'
import { ThemeProvider } from 'next-themes'
import '../assets/styles/style.scss'
import {APP_THEME} from '@model/app-settings'

function App({Component, pageProps}: AppProps) {
  return (
    <ThemeProvider themes={Object.values(APP_THEME)}>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default App
