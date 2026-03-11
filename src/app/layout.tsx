import type { Metadata } from 'next';
import './globals.css';
import DefaultLayout from '@/components/layouts/DefaultLayout';
import ThemeProvider from '@/components/providers/ThemeProvider';

export const metadata: Metadata = {
  title: 'Douli Blog',
  description: 'A blog built with Next.js App Router and MDX',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-Hant" suppressHydrationWarning>
      <body>
        <ThemeProvider>
          <DefaultLayout>{children}</DefaultLayout>
        </ThemeProvider>
      </body>
    </html>
  );
}