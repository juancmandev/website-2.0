import { Header, Footer, BackToTop } from '@/components';
import { localesList } from '@/lang/locales';
import { TRootLayout } from '@/types';
import { NextIntlClientProvider } from 'next-intl';
import { unstable_setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';

export function generateStaticParams() {
  return localesList.map((locale) => ({ locale }));
}

export default async function RootLayout(props: TRootLayout) {
  let messages;
  try {
    messages = (await import(`@/lang/${props.params.locale}.json`)).default;
  } catch (error) {
    notFound();
  }

  unstable_setRequestLocale(props.params.locale);

  return (
    <html lang={props.params.locale}>
      <body>
        <NextIntlClientProvider messages={messages}>
          <Header locale={props.params.locale} />
          <main className='max-w-[1200px] xl:mx-auto min-h-[calc(100vh_-_76px)] px-6 xl:px-0 py-20'>
            {props.children}
            <BackToTop />
          </main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
