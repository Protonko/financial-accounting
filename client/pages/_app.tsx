import type { AppProps } from 'next/app'
import '../assets/styles/style.scss'

function App({Component, pageProps}: AppProps) {
  return <Component {...pageProps} />
}

export default App
