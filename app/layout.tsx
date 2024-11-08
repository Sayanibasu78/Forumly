import { Metadata } from 'next';

import { cn } from '@/lib/utils';
import { Inter } from 'next/font/google';
import { Toaster } from '@/components/ui/toaster';
import Navbar from '@/components/layouts/Navbar';
import SessionProviders from '@/providers/Session-Provider';
import TanstackProvider from '@/providers/Tanstack-Provider';

import '@/styles/globals.css';

export const metadata: Metadata = {
  title: "Forumly",
  description: "Created by Ayan Saha and teams.",
};

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
  authModal
}: {
  children: React.ReactNode,
  authModal: React.ReactNode
}) {
  return (
    <html
      lang='en'
      className={cn(
        'bg-white text-slate-900 antialiased light',
        inter.className
      )}
    >
      <body className='min-h-screen pt-12 bg-slate-50 antialiased'>
        <TanstackProvider>
          <SessionProviders>
            <Navbar />
            {authModal}
            <div className='container max-w-7xl mx-auto h-full pt-12'>
              {children}
            </div>
          </SessionProviders>
          <Toaster />
        </TanstackProvider>
      </body>
    </html>
  );
}
