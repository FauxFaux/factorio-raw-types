import type { Metadata } from 'next';
import { twMerge } from 'tailwind-merge';
import React from 'react';

import './globals.css';

export const metadata: Metadata = {};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={twMerge('bg-black text-white')}>{children}</body>
    </html>
  );
}
