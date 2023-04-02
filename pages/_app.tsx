import Layout from '@/components/Layout'
import '@/styles/globals.css'
import '@/styles/tailwind.css'
import Head from 'next/head'
import Script from 'next/script'
import themes from '@/styles/themes.json'
import type { AppProps } from 'next/app'
import { usePathname } from 'next/navigation'
import { useContext } from 'react'
import ThemeContext from '@/context/theme'

export default function App({ Component, pageProps }: AppProps) {
  const pathname = usePathname()
  const {theme : chosenTheme} = useContext(ThemeContext)
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
                ${
                  themes.map((theme) => {
                    if(theme.id === chosenTheme){
                      return Object.keys(theme.colors).map((color:string) => {
                        // @ts-ignore
                        return `--${color} : ${theme.colors[color]};`
                      }).join('\n')
                    }
                  })
                 }
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
