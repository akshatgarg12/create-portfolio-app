import BlogCard from "@/components/Cards/Blog";

export default function Home() {
  return (
    <section className="bg-background min-h-screen py-10">
      <div className="flex flex-col items-center justify-center">
        <h4 className="text-2xl font-bold text-text">
          Tech / Productivity / Experience
        </h4>
        <section className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-3">
          {[1, 2, 3, 4].map((id) => {
            return (
              <BlogCard
                key={id}
                id={id}
                title="How to use the new Next.js Image Component"
                img="/logos/ms.png"
                description=", nec ultricies nisl nisl sit amet nisl. Sed euismod, nisl vel ultricies lacinia, nunc nisl ultricies nisl, nec ultricies nisl nisl sit amet nisl."
              />
            );
          })}
        </section>
      </div>
    </section>
  );
}
