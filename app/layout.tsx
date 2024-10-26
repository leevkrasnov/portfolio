import type { Metadata } from 'next';
import { montserrat } from './ui/fonts';
import './globals.css';

export const metadata: Metadata = {
  title: 'Лев Краснов',
  description: 'Портфолио Front-end web development',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={`${montserrat.className} antialiased`}>{children}</body>
    </html>
  );
}
