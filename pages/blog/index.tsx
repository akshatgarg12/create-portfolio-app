import BlogCard from "@/components/Cards/Blog";
import { getAllBlogs } from "@/lib/blog";

export const getStaticProps = async () => {
  const blogs = getAllBlogs();
  // console.log(blogs);
  return {
    props: {
      blogs,
    },
  };
};

export interface Blog {
  slug: string;
  meta: { title: string; img: string; description: string };
  content: string;
}

export default function Blog({ blogs }: { blogs: Blog[] }) {
  return (
    <section className="bg-background min-h-screen py-10">
      <div className="flex flex-col items-center justify-center">
        <h4 className="text-2xl font-bold text-text">
          Tech / Productivity / Experience
        </h4>
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
