'use client';

import { useTheme } from 'next-themes';
import { FaMoon, FaSun } from 'react-icons/fa';

export default function ThemeToggle() {
  const { theme, resolvedTheme, setTheme } = useTheme();

  const currentTheme = theme === 'system' ? resolvedTheme : theme;
  const isDark = currentTheme === 'dark';

  const handleToggleTheme = () => {
    setTheme(isDark ? 'light' : 'dark');
  };

  return (
    <button
      type="button"
      aria-label={isDark ? '切換為淺色模式' : '切換為深色模式'}
      title={isDark ? '切換為淺色模式' : '切換為深色模式'}
      onClick={handleToggleTheme}
      className="inline-flex items-center justify-center text-zinc-700 transition-colors hover:text-black dark:text-zinc-300 dark:hover:text-white"
    >
      {isDark ? <FaSun size={16} /> : <FaMoon size={16} />}
    </button>
  );
}