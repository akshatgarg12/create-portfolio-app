import fs from "fs";
import { join } from "path";
import matter from "gray-matter";

const blogsDirectory = join(process.cwd(), "blogs");

export function getBlogBySlug(slug: string) {
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = join(blogsDirectory, `${realSlug}.md`);
  try {
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);
    return { slug: realSlug, meta: data, content };
  } catch (e) {
    throw new Error("Could not find blog");
  }
}

export function getAllBlogs() {
  const slugs = fs.readdirSync(blogsDirectory);
  const blogs = slugs.map((slug) => getBlogBySlug(slug));

  return blogs;
}
