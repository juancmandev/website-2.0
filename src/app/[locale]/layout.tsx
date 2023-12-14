import { Header, Footer, BackToTop } from '@/components';
import { TRootLayout } from '@/types';
import { NextIntlClientProvider } from 'next-intl';
import { notFound } from 'next/navigation';

export function generateStaticParams() {
  return [{ lang: 'en' }, { lang: 'es' }];
}

export default async function RootLayout(props: TRootLayout) {
  let messages;
  try {
    messages = (await import(`@/lang/${props.params.locale}.json`)).default;
  } catch (error) {
    notFound();
  }

  return (
    <html lang={props.params.locale}>
      <body>
        <NextIntlClientProvider messages={messages}>
          <Header locale={props.params.locale} />
          <main className='max-w-[1200px] xl:mx-auto xl:px-0 min-h-[calc(100vh_-_76px)] px-6 md:px-12 pt-40 md:pt-48 pb-20'>
            {props.children}
            <BackToTop />
          </main>
          <Footer locale={props.params.locale} />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
