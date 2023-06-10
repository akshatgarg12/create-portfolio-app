import BlogLayout from "@/components/BlogLayout";
import { getAllBlogs, getBlogBySlug } from "@/lib/blog";
import markdownToHtml from "@/lib/markdown";
import type { Blog } from "@/pages/blog";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { i18n } from "../../next-i18next.config";
import Head from "next/head";
import { GetStaticProps } from "next";
import { NextSeo, NextSeoProps } from "next-seo";
import { useRouter } from "next/router";
import HomeData from "@/config/home.json";

interface BlogPageProps extends Blog {
  placeholderImage: string;
}

export default function Blog({
  meta,
  content,
  placeholderImage,
}: BlogPageProps) {
  const URL =
    typeof window !== "undefined" && window.location.origin
      ? window.location.origin
      : "";
  const { asPath } = useRouter();

  const seoConfig: NextSeoProps = {
    noindex: !content,
    nofollow: !content,
    defaultTitle: meta.title,
    title: meta.title,
    description: meta.description,
    openGraph: {
      url: URL + asPath,
      title: meta.title,
      description: meta.description,
      images: [
        {
          url: URL + (meta.img ?? placeholderImage),
          width: 600,
          height: 600,
          alt: meta.title,
          type: "image/jpeg",
        },
      ],
    },
  };
  return (
    <>
      <Head>
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta
          name="twitter:image"
          content={URL + (meta.img ?? placeholderImage)}
        />
      </Head>
      <NextSeo {...seoConfig} />
      <Head>
        <title>{meta.title}</title>
      </Head>
      <BlogLayout meta={meta}>{content}</BlogLayout>
    </>
  );
}

export const getStaticProps: GetStaticProps = async ({ params, locale }) => {
  try {
    if (!params || !params.slug) return { notFound: true };
    const blog = getBlogBySlug(params.slug.toString());
    const content = await markdownToHtml(blog.content || "");
    return {
      props: {
        placeholderImage: HomeData.myImage,
        ...blog,
        content,
        ...(await serverSideTranslations(locale ?? i18n.defaultLocale, [
          "common",
        ])),
      },
    };
  } catch (e) {
    return { notFound: true };
  }
};

export async function getStaticPaths() {
  const blogs = getAllBlogs();

  return {
    paths: blogs.map((blog: any) => {
      return {
        params: {
          slug: blog.slug,
        },
      };
    }),
    fallback: "blocking",
  };
}
