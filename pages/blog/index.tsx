import BlogCard from "@/components/Cards/Blog";
import { getAllBlogs } from "@/lib/blog";
import { GetStaticProps } from "next";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { i18n } from "../../next-i18next.config";
import Subtext from "@/components/Subtext";

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const blogs = getAllBlogs();
  return {
    props: {
      blogs,
      ...(await serverSideTranslations(locale ?? i18n.defaultLocale, [
        "common",
      ])),
    },
  };
};

export interface Blog {
  slug: string;
  meta: { title: string; img: string; description: string };
  content: string;
}

export default function Blog({ blogs }: { blogs: Blog[] }) {
  const { t } = useTranslation("common");
  return (
    <section className="bg-background min-h-screen py-10">
      <div className="flex flex-col items-center justify-center">
        <Subtext text={t("blog.subtext")} />
        <section className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-3">
          {blogs.map((blog) => {
            return (
              <BlogCard
                key={blog.slug}
                id={blog.slug}
                title={blog.meta.title}
                img={blog.meta.img}
                description={blog.meta.description}
              />
            );
          })}
        </section>
      </div>
    </section>
  );
}
