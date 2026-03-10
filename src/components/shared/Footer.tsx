export default function Footer() {
  return (
    <footer className="border-t border-zinc-200 bg-white w-[1200px] mx-auto">
      <div className="mx-auto max-w-6xl px-4 py-6 text-sm text-gray-500">
        © {new Date().getFullYear()} Douli&apos;s blog. All rights reserved.
      </div>
    </footer>
  );
}