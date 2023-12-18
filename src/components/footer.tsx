'use client';

import { useTranslations } from 'next-intl';
import { Button } from './ui/button';

export default function Footer() {
  const t = useTranslations();

  return (
    <footer className='text-sm font-light px-6 md:px-16 py-10 space-y-2 text-center bg-secondary'>
      <p>{t('footer.h4')}</p>
      <p>{t('footer.h5')}</p>
      <p>{t('footer.h6')}</p>
      <Button asChild variant='link' className='flex text-primary underline'>
        <a target='_blank' href='https://github.com/juancmandev/website-2.0'>
          {t('footer.source_code')}
        </a>
      </Button>
    </footer>
  );
}
