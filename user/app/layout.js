import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata = {
  title: {
    default: 'United Career Solutions | End-to-End Career Support',
    template: '%s | United Career Solutions',
  },
  description:
    'United Career Solutions provides end-to-end career support services designed to help international candidates secure interviews and succeed in competitive US and UK job markets.',
  keywords: [
    'career support',
    'resume writing',
    'job placement',
    'international candidates',
    'USA jobs',
    'UK jobs',
    'LinkedIn optimization',
    'interview preparation',
  ],
  openGraph: {
    title: 'United Career Solutions',
    description:
      'End-to-end career support for international candidates targeting US and UK markets.',
    type: 'website',
    locale: 'en_US',
    siteName: 'United Career Solutions',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        <Navbar />
        <main style={{ paddingTop: 'var(--navbar-height)' }}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
