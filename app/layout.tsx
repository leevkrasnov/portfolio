import type { Metadata } from 'next';
import { montserrat } from './ui/fonts';
import './globals.css';

export const metadata: Metadata = {
  title: 'Lev Krasnov',
  description: 'Frontend developer portfolio',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} antialiased`}>{children}</body>
    </html>
  );
}
