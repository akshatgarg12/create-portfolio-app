import BlogLayout from "@/components/BlogLayout.tsx";
import { getAllBlogs, getBlogBySlug } from "@/lib/blog";
import markdownToHtml from "@/lib/markdown";
import { notFound } from "next/navigation";

export default function Blog({ meta, content }: any) {
  return <BlogLayout meta={meta}>{content}</BlogLayout>;
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
    paths: blogs.map((blog) => {
      return {
        params: {
          slug: blog.slug,
        },
      };
    }),
    fallback: "blocking",
  };
}
