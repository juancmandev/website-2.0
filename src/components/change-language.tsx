'use client';

import { useTranslations } from 'next-intl';
import Link from 'next/link';

type TChangeLanguage = {
  locale: 'en' | 'es';
};

export default function ChangeLanguage(props: TChangeLanguage) {
  const t = useTranslations();
  const changeLang = props.locale === 'en' ? 'es' : 'en';

  return (
    <Link
      title={t('header.change_language')}
      className='w-full flex justify-center px-2 text-xl'
      href={`/${changeLang}`}
    >
      {t(`header.${props.locale}`)}
    </Link>
  );
}
