import type { Metadata } from 'next';
import { Playfair_Display, Inter } from 'next/font/google';
import './globals.css';

const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' });
const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
  title: 'Eria & Fabian - Wedding',
  description: 'Celebrate the wedding of Eria Lopez and Fabian Holzmeier.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable} scroll-smooth`}>
      <body className="font-sans bg-beige text-charcoal antialiased" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
