import '../styles/globals.css'
import { Provider } from 'react-redux'
import store from '../store'
import { useEffect } from 'react'

export default function App({ Component, pageProps }) {
  useEffect(() => {
    const t = localStorage.getItem('theme') || (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
    document.documentElement.classList.toggle('dark', t === 'dark')
  }, [])
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}
