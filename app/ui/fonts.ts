import { Lato } from 'next/font/google';
import { Montserrat } from 'next/font/google';

export const lato = Lato({
  subsets: ['latin'],
  weight: ['300', '400'],
  style: ['normal', 'italic'],
});
export const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '700'],
});
