import { Html, Head, Main, NextScript } from 'next/document'

const Document = () => {
  return (
    <Html lang="en">
       <Head title='Akshat Garg'>
          <title>Akshat Garg</title>
          <meta name="description" content="Personal portfolio of akshat garg" />
          <link rel="icon" href="/favicon.ico" />
          {/* eslint-disable-next-line @next/next/no-css-tags */}
          <link href="/dist/output.css" rel="stylesheet" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        </Head>
      <body> 
        <Main />
        <NextScript />
        {/* eslint-disable-next-line @next/next/no-sync-scripts */}
        <script src="https://cdn.jsdelivr.net/npm/tw-elements/dist/js/index.min.js"></script>
      </body>
    </Html>
  )
}

export default Document
