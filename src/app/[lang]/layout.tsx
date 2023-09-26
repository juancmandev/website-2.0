import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BackToTop from '@/components/BackToTop';
import { Locale } from '@/dictionaries/i18n-config';
import '@/styles/globals.css';

interface IRootLayout {
  children: React.ReactNode;
  params: {
    lang: Locale;
  };
}

export function generateStaticParams() {
  return [{ lang: 'en' }, { lang: 'es' }];
}

export default function RootLayout(props: IRootLayout) {
  const { children, params } = props;

  return (
    <html lang={params.lang}>
      <body className='text-white1 bg-dark2'>
        <Header lang={params.lang} />
        <main className='max-w-[1200px] xl:mx-auto xl:px-0 min-h-[calc(100vh_-_76px)] px-6 md:px-12 pt-30 pb-20'>
          {children}
          <BackToTop lang={params.lang} />
        </main>
        <Footer lang={params.lang} />
      </body>
    </html>
  );
}
