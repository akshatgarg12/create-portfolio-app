import BlogLayout from "@/components/BlogLayout";
import { getAllBlogs, getBlogBySlug } from "@/lib/blog";
import markdownToHtml from "@/lib/markdown";
import type { Blog } from "@/pages/blog";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { i18n } from "../../next-i18next.config";
import Head from "next/head";
import { GetStaticProps } from "next";
import { NextSeo } from "next-seo";

export default function Blog({ meta, content }: Blog) {
  const seoConfig = {
    title: meta.title,
    description: meta.description,
    openGraph: {
      title: meta.title,
      description: meta.description,
      images: [
        {
          url: meta.img,
          width: 800,
          height: 600,
          alt: meta.title,
          type: "image/jpeg",
        },
      ],
    },
  };
  return (
    <>
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
