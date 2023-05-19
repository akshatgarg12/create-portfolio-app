import BlogLayout from "@/components/BlogLayout.tsx";
import { getAllBlogs, getBlogBySlug } from "@/lib/blog";
import markdownToHtml from "@/lib/markdown";
import type { Blog } from "@/pages/blog";
import Head from "next/head";
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

export async function getStaticProps({ params }: any) {
  try {
    const blog = getBlogBySlug(params.slug);
    const content = await markdownToHtml(blog.content || "");

    return {
      props: {
        ...blog,
        content,
      },
    };
  } catch (e) {
    return { notFound: true };
  }
}

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
