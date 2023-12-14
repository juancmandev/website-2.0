import { getTranslations } from 'next-intl/server';

type TFooter = {
  locale: 'en' | 'es';
};

export default async function Footer(props: TFooter) {
  const t = await getTranslations({ locale: props.locale });

  return (
    <footer className='text-sm px-6 md:px-16 py-10 text-center bg-secondary'>
      <p>{t('footer.h4')}</p>
      <p>{t('footer.h5')}</p>
      <p>{t('footer.h6')}</p>
      <a
        target='_blank'
        href='https://github.com/juancmandev/website-2.0'
        className='transition-colors text-primary underline hover:text-primaryLight focus:text-primaryLight'
      >
        {t('footer.source_code')}
      </a>
    </footer>
  );
}
