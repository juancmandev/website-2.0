import dynamic from 'next/dynamic';
import Footer from '@/components/footer';
import Header from '@/components/header';
import { Inter } from 'next/font/google';
import './globals.css';

const BackToTop = dynamic(() => import('@/components/back-to-top'));

const inter = Inter({ subsets: ['latin'] });

type Props = {
  children: React.ReactNode;
};

export default async function RootLayout(props: Props) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <Header />
        <main className='max-w-[1200px] xl:mx-auto min-h-[calc(100vh_-_76px)] px-6 xl:px-0 pt-4 md:pt-16 pb-20'>
          {props.children}
          <BackToTop />
        </main>
        <Footer />
      </body>
    </html>
  );
}
