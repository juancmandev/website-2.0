import Header from '@/components/Header';
import Footer from '@/components/Footer';
import '@/styles/globals.css';
import '@fontsource/roboto';

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
        <main className='max-w-[1200px] xl:mx-auto xl:px-0 min-h-[calc(100vh_-_76px)] px-6 md:px-12 py-30'>
          {children}
        </main>
        <Footer lang={params.lang} />
      </body>
    </html>
  );
}
