import type { Metadata } from "next";
import { montserrat } from "./ui/fonts";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "Лев Краснов",
  description: "Портфолио Front-end web development",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" data-lt-installed="true">
      <head>
        <link rel="icon" href="/favicon.png" />
      </head>
      <body
        className={`${montserrat.className} flex min-h-screen flex-col overflow-x-hidden antialiased`}
      >
        <Header />
        <div className="mx-4 mt-16 flex-grow px-4 md:px-16">{children}</div>
        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  );
}
