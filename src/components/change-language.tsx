'use client';

import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { Button } from './ui/button';

type TChangeLanguage = {
  locale: 'en' | 'es';
};

export default function ChangeLanguage(props: TChangeLanguage) {
  const t = useTranslations();
  const changeLang = props.locale === 'en' ? 'es' : 'en';

  return (
    <Button
      asChild
      variant='link'
      className='px-2 text-xl flex justify-center items-center'
    >
      <Link title={t('header.change_language')} href={`/${changeLang}`}>
        {t(`header.${props.locale}`)}
      </Link>
    </Button>
  );
}
