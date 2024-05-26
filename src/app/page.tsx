import Accent from "@/components/Accent";
import BlogCard from "@/components/content/blog/BlogCard";
import ButtonLink from "@/components/links/ButtonLink";
import { sortByDate } from "@/lib/mdx.client";
import { getAllFilesFrontmatter } from "@/lib/mdx.server";

const page = async () => {
  const filesBlog = await getAllFilesFrontmatter("blog");
  const posts = sortByDate(filesBlog);

  const filesProject = await getAllFilesFrontmatter("projects");
  const projects = sortByDate(filesProject);
  return (
    <>
      <main>
        <section className="layout min-h-main justify-center py-12">
          <h2>Hello!</h2>
          <h1 className="text-3xl md:text-5xl dark:text-white">
            You can call me Deasy
          </h1>
          <p className="mt-2 max-w-4xl leading-relaxed text-gray-700 dark:text-gray-200 md:mt-3 text-sm md:text-base 2xl:text-lg">
            Statistics Lecturer at Universitas Dumai
          </p>
          <p className="mt-4 max-w-4xl text-gray-700 dark:text-gray-200 md:mt-6 md:text-lg 2xl:text-xl">
            I am a statistics lecturer currently teaching at Dumai University
          </p>
          <p className="mt-3 max-w-4xl leading-relaxed text-gray-700 dark:text-gray-200 md:mt-4 md:text-lg 2xl:text-xl">
            Make sure to study my materials.
          </p>
          <div className="mt-8 flex flex-wrap gap-4 md:!text-lg">
            <ButtonLink href="#materials">Read the materials</ButtonLink>
            <ButtonLink href="/about">Learn more about me</ButtonLink>
          </div>
        </section>

        <section className="py-20">
          <div className="layout">
            <h2 className="text-2xl md:text-4xl" id="materials">
              <Accent>Materi</Accent>
            </h2>
            <ul className="mt-4 grid gap-4 sm:grid-cols-2">
              {posts.map((post) => (
                <BlogCard key={post.slug} post={post} />
              ))}
            </ul>
          </div>
        </section>

        <section className="py-20">
          <div className="layout">
            <h2 className="text-2xl md:text-4xl" id="materials">
              <Accent>Featured Latihan</Accent>
            </h2>
            <ul className="mt-4 grid gap-4 sm:grid-cols-2">
              {posts.map((post) => (
                <BlogCard key={post.slug} post={post} />
              ))}
            </ul>
          </div>
        </section>
      </main>
    </>
  );
};

export default page;
