import Layout from '@/components/Layout'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { usePathname } from 'next/navigation'
export default function App({ Component, pageProps }: AppProps) {
  const pathname = usePathname()
  return (
    <Layout pathname={pathname}>
      <Component {...pageProps} />
    </Layout>
  )
}
