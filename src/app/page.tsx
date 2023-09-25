import Link from 'next/link';
import '@/styles/globals.css';

export default function Page() {
  return (
    <main className='px-5 py-15 flex justify-center items-center bg-dark1 text-white1 font-light min-h-screen'>
      <div className='flex flex-col gap-4'>
        <h1 className='text-2xl text-center'>
          This is my website, choose your language.
        </h1>
        <h1 className='text-2xl text-center'>
          Este es mi website, escoge tu idioma.
        </h1>
        <div className='flex justify-center gap-10'>
          <Link title='English' className='text-7xl' href='/en'>
            🇺🇸
          </Link>
          <Link title='Español' className='text-7xl' href='/es'>
            🇲🇽
          </Link>
        </div>
      </div>
    </main>
  );
}
