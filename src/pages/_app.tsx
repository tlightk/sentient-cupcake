import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Sentient Cupcake</title>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.png' />
        <meta name='description' content='Delicious things also like to study' />
      </Head>
      <Component {...pageProps} />
    </>
  )
}
