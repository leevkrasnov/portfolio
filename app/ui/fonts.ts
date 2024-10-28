import { Fira_Mono } from 'next/font/google';
import { Montserrat } from 'next/font/google';
import { Nunito } from 'next/font/google';

export const fira = Fira_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
});

export const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '700'],
});

export const nunito = Nunito({ subsets: ['latin'], weight: ['400', '500'] });
