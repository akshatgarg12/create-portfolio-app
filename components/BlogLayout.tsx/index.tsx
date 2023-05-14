import Head from "next/head";
import { useRouter } from "next/router";
import { IoArrowBack } from "react-icons/io5";

export default function BlogLayout({ children, meta }: any) {
  const router = useRouter();
  return (
    <>
      <Head>
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
      <div className="bg-background m-0">
        <IoArrowBack
          className="text-text cursor-pointer pt-4 pl-4"
          size={40}
          title="Go Back"
          onClick={() => router.back()}
        />
        <article
          className="prose lg:prose-xl min-h-screen text-text px-8 m-auto py-4 sm:py-16"
          dangerouslySetInnerHTML={{ __html: children }}
        />
      </div>
    </>
  );
}
