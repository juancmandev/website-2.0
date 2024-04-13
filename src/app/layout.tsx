import Footer from '@/components/footer';
import Navbar from '@/components/navbar';
import NextTopLoader from 'nextjs-toploader';
import rssParser from 'rss-parser';
import fs from 'fs';
import dynamic from 'next/dynamic';
import './globals.css';

const BackToTop = dynamic(() => import('@/components/back-to-top'));

type Props = {
  children: React.ReactNode;
};

const parser = new rssParser();

export default async function RootLayout(props: Props) {
  const rssFile = fs.readFileSync('public/rss.xml', 'utf8');
  const { lastBuildDate } = await parser.parseString(rssFile);

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
