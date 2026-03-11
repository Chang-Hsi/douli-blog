'use client';

import Link from 'next/link';
import { FaMedium, FaFacebookSquare, FaRss } from 'react-icons/fa';
import ThemeToggle from '@/components/shared/ThemeToggle';

const navItems = [
  { href: '/posts', label: '文章列表' },
  // { href: '/tags', label: '分類' },
  { href: '/recommended', label: '作品集' },
  { href: '/about', label: '關於我' },
];

export default function Header() {
  return (
    <header className="border-b border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-950">
      <div className="mx-auto flex h-16 max-w-3xl items-center justify-between">
        <Link
          href="/"
          className="shrink-0 text-2xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100"
        >
          Douli&apos;s Blog
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-base text-zinc-700 transition-colors hover:text-black dark:text-zinc-300 dark:hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-5">
          <Link
            href="https://medium.com"
            aria-label="Medium"
            className="text-zinc-700 transition-colors hover:text-black dark:text-zinc-300 dark:hover:text-white"
          >
            <FaMedium size={20} />
          </Link>

          <Link
            href="https://facebook.com"
            aria-label="Facebook"
            className="text-zinc-700 transition-colors hover:text-black dark:text-zinc-300 dark:hover:text-white"
          >
            <FaFacebookSquare size={18} />
          </Link>

          <Link
            href="/rss.xml"
            aria-label="RSS"
            className="text-zinc-700 transition-colors hover:text-black dark:text-zinc-300 dark:hover:text-white"
          >
            <FaRss size={18} />
          </Link>

          <ThemeToggle />

          {/* <span className="ml-1 text-base text-zinc-400 dark:text-zinc-500">
            English
          </span> */}
        </div>
      </div>
    </header>
  );
}