import Footer from '@/components/Footer';
import Header from '@/components/Header';
import '@/styles/globals.css';
import '@fontsource/roboto';
import { Analytics } from '@vercel/analytics/react';

export function generateStaticParams() {
  return [{ lang: 'en' }, { lang: 'es' }];
}

export default function RootLayout({ children, params }: any) {
  return (
    <html lang={params.lang}>
      <body className='text-white1 bg-dark2'>
        <Header lang={params.lang} />
        <main className='max-w-[1200px] xl:mx-auto xl:px-0 min-h-[calc(100vh_-_76px)] px-6 md:px-15 py-20'>
          {children}
        </main>
        {/* <Footer /> */}
        <Analytics />
      </body>
    </html>
  );
}
