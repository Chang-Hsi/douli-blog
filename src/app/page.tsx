import Link from 'next/link';
import { getAllPosts } from '@/lib/posts';

export default async function HomePage() {
  const posts = await getAllPosts();

  return (
    <section className="mx-auto max-w-3xl py-10">
      <div className="space-y-10">
        {posts.map((post) => (
          <article
            key={post.slug}
            className="border-b border-zinc-200 pb-10 dark:border-zinc-800"
          >
            <Link href={`/posts/${post.slug}`}>
              <h2 className="mb-3 text-3xl tracking-tight text-zinc-700 hover:text-zinc-900 dark:text-zinc-100 dark:hover:text-white">
                {post.title}
              </h2>
            </Link>

            <p className="mb-6 text-sm text-zinc-500 dark:text-zinc-400">
              {post.date}
              {post.tags?.length > 0 && (
                <span className="ml-3">
                  {post.tags.join(', ')}
                </span>
              )}
            </p>

            <p className="mb-6 whitespace-pre-line text-[16px] leading-7 text-zinc-700 dark:text-zinc-300">
              {post.excerpt}
            </p>

            <Link
              href={`/posts/${post.slug}`}
              className="text-zinc-400 transition hover:text-zinc-600 dark:text-zinc-500 dark:hover:text-zinc-300"
            >
              閱讀更多
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}