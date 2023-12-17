'use client';

import { useTranslations } from 'next-intl';
import { Button } from './ui/button';

const isBrowser = () => typeof window !== 'undefined'; //The approach recommended by Next.js

export default function BackToTop() {
  const t = useTranslations();
  const scrollToTop = () => {
    if (!isBrowser()) return;

    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Button
      variant='secondary'
      onClick={scrollToTop}
      className='mt-20 flex mx-auto'
    >
      {t('back_to_top')}
    </Button>
  );
}
