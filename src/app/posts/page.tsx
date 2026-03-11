import Link from 'next/link';
import { getAllPosts } from '@/lib/posts';

type GroupedPosts = Record<string, Awaited<ReturnType<typeof getAllPosts>>>;

function groupPostsByYear(posts: Awaited<ReturnType<typeof getAllPosts>>) {
  return posts.reduce<GroupedPosts>((groups, post) => {
    const year = new Date(post.date).getFullYear().toString();

    if (!groups[year]) {
      groups[year] = [];
    }

    groups[year].push(post);
    return groups;
  }, {});
}

function formatMonthDay(dateString: string) {
  const date = new Date(dateString);

  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');

  return `${month}月${day}日`;
}

export default async function PostsPage() {
  const posts = await getAllPosts();
  const groupedPosts = groupPostsByYear(posts);
  const years = Object.keys(groupedPosts).sort((a, b) => Number(b) - Number(a));

  return (
    <section className="mx-auto max-w-3xl py-10 md:py-14">
      <h1 className="mb-10 text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
        文章列表
      </h1>

      <div className="space-y-12">
        {years.map((year) => (
          <section key={year}>
            <h2 className="mb-5 text-4xl font-medium text-zinc-700 dark:text-zinc-200">
              {year}
            </h2>

            <div className="border-l border-zinc-300 pl-5 dark:border-zinc-700">
              <ul className="space-y-4">
                {groupedPosts[year].map((post) => (
                  <li key={post.slug}>
                    <Link
                      href={`/posts/${post.slug}`}
                      className="group grid grid-cols-[72px_1fr] items-start gap-4 md:grid-cols-[88px_1fr]"
                    >
                      <span className="text-sm text-zinc-400 transition-colors group-hover:text-zinc-500 dark:text-zinc-500 dark:group-hover:text-zinc-400">
                        {formatMonthDay(post.date)}
                      </span>

                      <span className="text-lg leading-7 text-zinc-700 transition-colors group-hover:text-zinc-950 dark:text-zinc-300 dark:group-hover:text-zinc-100">
                        {post.title}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        ))}
      </div>
    </section>
  );
}