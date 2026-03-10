import type { Metadata } from 'next';
import './globals.css';
import DefaultLayout from '@/components/layouts/DefaultLayout';
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

export const metadata: Metadata = {
  title: 'Douli&apos;s Blog',
  description: 'A blog built with Next.js App Router and MDX',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-Hant" className={cn("font-sans", geist.variable)}>
      <body>
        <DefaultLayout>{children}</DefaultLayout>
      </body>
    </html>
  );
}