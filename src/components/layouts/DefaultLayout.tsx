import type { ReactNode } from 'react';
import Header from '@/components/shared/Header';
import Footer from '@/components/shared/Footer';

type DefaultLayoutProps = {
  children: ReactNode;
};

export default function DefaultLayout({ children }: DefaultLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col bg-white text-zinc-900 dark:bg-zinc-950 dark:text-zinc-100">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}