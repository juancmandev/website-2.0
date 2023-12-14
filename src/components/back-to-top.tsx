'use client';

type THeader = {
  locale: 'en' | 'es';
};

const dictionary: any = {
  ['back_to_top']: {
    ['en']: 'Back to top',
    ['es']: 'Volver arriba',
  },
};

const isBrowser = () => typeof window !== 'undefined'; //The approach recommended by Next.js

export default function BackToTop({ locale }: THeader) {
  const scrollToTop = () => {
    if (!isBrowser()) return;

    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      onClick={scrollToTop}
      className='mt-20 p-3 flex mx-auto shadow-lg bg-dark1 rounded-sm'
    >
      {dictionary['back_to_top'][locale]}
    </button>
  );
}
