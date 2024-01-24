'use client';

import { useTranslations } from 'next-intl';
import { Button } from './ui/button';

export default function Footer() {
  const t = useTranslations();

  return (
    <footer className='space-y-1 text-sm font-light px-6 md:px-16 py-8 text-center bg-secondary'>
      <p>{t('footer.h4')}</p>
      <p>{t('footer.h5')}</p>
      <p>{t('footer.h6')}</p>
      <Button
        size={null}
        asChild
        variant='link'
        className='w-max mx-auto flex text-primary'
      >
        <a target='_blank' href='https://github.com/juancmandev/website-2.0'>
          {t('footer.source_code')}
        </a>
      </Button>
    </footer>
  );
}
