import { Header, Footer, BackToTop } from '@/components';
import { IRootLayout } from '@/interfaces';
import '@/styles/globals.css';

export function generateStaticParams() {
  return [{ lang: 'en' }, { lang: 'es' }];
}

export default function RootLayout(props: IRootLayout) {
  return (
    <html lang={props.params.lang}>
      <body className='text-white1 bg-dark2'>
        <Header lang={props.params.lang} />
        <main className='max-w-[1200px] xl:mx-auto xl:px-0 min-h-[calc(100vh_-_76px)] px-6 md:px-12 pt-40 md:pt-48 pb-20'>
          {props.children}
          <BackToTop lang={props.params.lang} />
        </main>
        <Footer lang={props.params.lang} />
      </body>
    </html>
  );
}
