import React from 'react'
import type { AppProps } from 'next/app'
import Script from 'next/script'

import { Layout } from '../components'

import 'tailwindcss/tailwind.css'
import '../styles/globals.css'
import '../styles/globals.scss'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Script strategy="lazyOnload" src={`https://www.googletagmanager.com/gtag/js?id=${ process.env.NEXT_PUBLIC_ANALYTICS_MEASUREMENT_ID }`} />

      <Script strategy="lazyOnload">
          {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${ process.env.NEXT_PUBLIC_ANALYTICS_MEASUREMENT_ID }', {
              page_path: window.location.pathname,
              });
          `}
      </Script>

      <Layout>
        <Component {...pageProps} />
      </Layout>
  </>
  )
}

export default MyApp
