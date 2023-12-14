import { Header, Footer, BackToTop } from '@/components';
import { TRootLayout } from '@/types';
import '@/styles/globals.css';

export function generateStaticParams() {
  return [{ lang: 'en' }, { lang: 'es' }];
}

export default function RootLayout(props: TRootLayout) {
  return (
    <html lang={props.params.locale}>
      <body className='text-white1 bg-dark2'>
        <Header locale={props.params.locale} />
        <main className='max-w-[1200px] xl:mx-auto xl:px-0 min-h-[calc(100vh_-_76px)] px-6 md:px-12 pt-40 md:pt-48 pb-20'>
          {props.children}
          <BackToTop locale={props.params.locale} />
        </main>
        <Footer locale={props.params.locale} />
      </body>
    </html>
  );
}
