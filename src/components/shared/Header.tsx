import Link from 'next/link';

const navItems = [
  { href: '/', label: '首頁' },
  { href: '/posts', label: '文章列表' },
  { href: '/tags', label: '分類' },
  { href: '/about', label: '關於我' },
];

export default function Header() {
  return (
    <header className="border-b bg-white">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        <Link href="/" className="text-2xl font-bold">
          Huli&apos;s blog
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-gray-700 transition hover:text-black"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4 text-sm text-gray-700">
          <button type="button" className="hover:text-black">
            English
          </button>
        </div>
      </div>
    </header>
  );
}