import Login from '@/pages/Login'
import type { AppProps } from 'next/app'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
        <Login />
        <ToastContainer theme="light" toastStyle={{
          color: 'blue',
        }} />
    </>
  )
}
