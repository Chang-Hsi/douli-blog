import { notFound } from 'next/navigation';
import { getAllPostSlugs, getPostBySlug } from '@/lib/posts';

type PostPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  const slugs = getAllPostSlugs();

  return slugs.map((slug) => ({
    slug,
  }));
}

export default async function PostPage({ params }: PostPageProps) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="mx-auto max-w-3xl py-10">
      <header className="mb-10">
        <h1 className="mb-4 text-3xl text-zinc-700 dark:text-zinc-100">{post.frontmatter.title}</h1>
        <p className="mb-2 text-sm text-zinc-500 dark:text-zinc-400">
          {post.frontmatter.date}
        </p>
      </header>

      <div className="prose prose-zinc max-w-none dark:prose-invert prose-blockquote:border-l-4 prose-blockquote:pl-4 prose-blockquote:italic prose-blockquote:text-zinc-600 dark:prose-blockquote:text-zinc-300">
        {post.content}
      </div>
    </article>
  );
}