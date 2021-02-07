import 'styles/globals.scss'
import { AppProps } from 'next/app'
import Head from 'next/head'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>BadEats</title>
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
