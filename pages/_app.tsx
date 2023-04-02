import Layout from '@/components/Layout'
import '@/styles/globals.css'
import '@/styles/tailwind.css'
import Head from 'next/head'
import Script from 'next/script'
import type { AppProps } from 'next/app'
import { usePathname } from 'next/navigation'

export default function App({ Component, pageProps }: AppProps) {
  const pathname = usePathname()
  return (
    <>
      <Head>
        <title>Akshat Garg</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Personal portfolio of akshat garg" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <style>
          {
            `
            @layer base {
              :root {
                  --background-color: red;
                  --alt-background-color: blue;
                }
              }
            `
          }
        </style>
      </Head>
      <Layout pathname={pathname}>
        <Component {...pageProps} />
      </Layout>
      <Script src="https://cdn.jsdelivr.net/npm/tw-elements/dist/js/index.min.js"></Script>
    </>
  )
}
