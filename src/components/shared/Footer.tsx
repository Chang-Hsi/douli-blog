export default function Footer() {
  return (
    <footer className="border-t border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-950">
      <div className="mx-auto max-w-3xl py-6 text-sm text-zinc-500 dark:text-zinc-400">
        © {new Date().getFullYear()} Douli&apos;s Blog. All rights reserved.
      </div>
    </footer>
  );
}