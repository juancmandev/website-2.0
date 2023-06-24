import Footer from '@/components/Footer';
import Header from '@/components/Header';
import '@/styles/globals.css';
import '@fontsource/roboto';
import { Analytics } from '@vercel/analytics/react';

export const metadata = {
  title: 'juancmandev',
  description: `Let's dev!`,
};

export const generateStaticParams = async () => {
  return [{ lang: 'en' }, { lang: 'es' }];
};

const RootLayout = ({ children, params }: any) => {
  return (
    <html lang={params.lang}>
      <body className='text-white1 bg-dark2'>
        <Header lang={params.lang} />
        <main className='min-h-screen px-6 md:px-15 py-20'>{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
};

export default RootLayout;
