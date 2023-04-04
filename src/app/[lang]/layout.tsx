import Header from '@/components/Header';
import '@/styles/globals.css';
import '@fontsource/roboto';

export const metadata = {
  title: 'juancmandev',
  description: `Let's dev!`,
};

export async function generateStaticParams() {
  return [{ lang: 'en' }, { lang: 'es' }];
}

const RootLayout = ({ children, params }: any) => {
  return (
    <html lang={params.lang}>
      <body className='w-screen h-screen text-white1 bg-dark2 overflow-hidden'>
        <Header lang={params.lang} />
        <main className='main overflow-auto scroll-smooth px-[20px] md:px-[80px] py-[80px]'>
          {children}
        </main>
      </body>
    </html>
  );
};

export default RootLayout;
