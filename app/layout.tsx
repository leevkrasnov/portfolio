import type { Metadata } from 'next';
import { montserrat } from './ui/fonts';
import './globals.css';
import Header from './components/Header';

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
      <body className={`${montserrat.className} antialiased`}>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
