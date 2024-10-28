import type { Metadata } from 'next';
import { montserrat } from './ui/fonts';
import './globals.css';
import Header from './components/Header';

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
    <html lang="ru" data-lt-installed="true">
      <head>
        <link rel="icon" href="/apple-touch-icon.png" />
      </head>
      <body className={`${montserrat.className} antialiased`}>
        <Header />
        <div className="mx-20 mt-16">{children}</div>
      </body>
    </html>
  );
}
