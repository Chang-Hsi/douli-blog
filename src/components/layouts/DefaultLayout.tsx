import type { ReactNode } from 'react';
import Header from '@/components/shared/Header';
import Footer from '@/components/shared/Footer';

type DefaultLayoutProps = {
  children: ReactNode;
};

export default function DefaultLayout({ children }: DefaultLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col bg-white text-black">
      <Header />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
    </div>
  );
}