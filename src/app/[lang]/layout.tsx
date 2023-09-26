import Header from '@/components/Header';
import Footer from '@/components/Footer';
import '@/styles/globals.css';
import '@fontsource/roboto';
import BackToTop from '@/components/BackToTop';

interface IRootLayout {
  children: React.ReactNode;
  params: {
    lang: 'en' | 'es';
  };
}

export function generateStaticParams() {
  return [{ lang: 'en' }, { lang: 'es' }];
}

export default function RootLayout({ children, params }: IRootLayout) {
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
