import BlogLayout from "@/components/BlogLayout";
import { getAllBlogs, getBlogBySlug } from "@/lib/blog";
import markdownToHtml from "@/lib/markdown";
import type { Blog } from "@/pages/blog";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { i18n } from "../../next-i18next.config";
import Head from "next/head";
import { GetStaticProps } from "next";

export default function Blog({ meta, content }: Blog) {
  return (
    <>
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
