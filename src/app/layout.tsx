import dynamic from 'next/dynamic';
import Footer from '@/components/footer';
import Header from '@/components/header';
import NextTopLoader from 'nextjs-toploader';
import './globals.css';

const BackToTop = dynamic(() => import('@/components/back-to-top'));

type Props = {
  children: React.ReactNode;
};

export default async function RootLayout(props: Props) {
  return (
    <html lang='en'>
      <body>
        <NextTopLoader color='#00adb5' showSpinner={false} />
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
