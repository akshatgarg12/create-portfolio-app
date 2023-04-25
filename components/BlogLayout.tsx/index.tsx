import Head from "next/head";

export default function BlogLayout({ children, meta }: any) {
  return (
    <>
      <Head>
        <title>{meta.title}</title>
        <meta charSet="utf-8" />
        <meta content="IE=edge" httpEquiv="X-UA-Compatible" />
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <link
          rel="preload"
          href="https://unpkg.com/prismjs@0.0.1/themes/prism-tomorrow.css"
          as="script"
        />
        <link
          href={`https://unpkg.com/prismjs@0.0.1/themes/prism-tomorrow.css`}
          rel="stylesheet"
        />
      </Head>
      <div id="skip">
        <article
          className="prose lg:prose-xl px-8 m-auto my-4 sm:my-16"
          dangerouslySetInnerHTML={{ __html: children }}
        />
      </div>
    </>
  );
}
