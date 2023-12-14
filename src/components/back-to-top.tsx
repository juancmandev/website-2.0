'use client';

import { useTranslations } from 'next-intl';

const isBrowser = () => typeof window !== 'undefined'; //The approach recommended by Next.js

export default function BackToTop() {
  const t = useTranslations();
  const scrollToTop = () => {
    if (!isBrowser()) return;

    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      onClick={scrollToTop}
      className='mt-20 p-3 flex mx-auto shadow-lg bg-dark1 rounded-sm'
    >
      {t('back_to_top')}
    </button>
  );
}
