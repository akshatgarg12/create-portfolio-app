import { Html, Head, Main, NextScript } from 'next/document'
import ThemeContext from '@/context/theme'
import { useState } from 'react'

const Document = () => {
  const [theme, setTheme] = useState('dark');

  return (
    <Html lang="en">
      <Head />
      <body> 
        <ThemeContext.Provider value={{
          theme, setTheme
        }}>
          <Main />
        </ThemeContext.Provider>
        <NextScript />
      </body>
    </Html>
  )
}

export default Document
