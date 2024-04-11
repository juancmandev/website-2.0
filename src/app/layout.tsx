import dynamic from 'next/dynamic';
import Footer from '@/components/footer';
import Navbar from '@/components/navbar';
import NextTopLoader from 'nextjs-toploader';
import rssParser from 'rss-parser';
import './globals.css';

const BackToTop = dynamic(() => import('@/components/back-to-top'));

type Props = {
  children: React.ReactNode;
};

const parser = new rssParser();
const url = process.env.NEXT_PAGE_URL ?? 'https://www.juancman.dev/';

export default async function RootLayout(props: Props) {
  const { lastBuildDate } = await parser.parseURL(`${url}/rss.xml`);

  return (
    <html lang='en'>
      <body>
        <NextTopLoader color='#00adb5' showSpinner={false} />
        <Navbar />
        <main className='min-h-screen max-w-[1200px] px-6 pb-20 pt-24 xl:mx-auto xl:px-0'>
          {props.children}
          <BackToTop />
        </main>
        <Footer lastBuildDate={lastBuildDate} />
      </body>
    </html>
  );
}
