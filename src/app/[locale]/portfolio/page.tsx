import { ItemCard } from '@/components';
import { TParamsLocale, TPage } from '@/types';
import { getAllContent } from '@/utils/getContent';
import { sortByKeyDesc } from '@/utils/sorts';
import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';

export async function generateMetadata(
  props: TParamsLocale
): Promise<Metadata> {
  const t = await getTranslations({
    locale: props.params.locale,
  });

  return {
    title: t('metadata.portfolio.title'),
    description: t('metadata.portfolio.description'),
  };
}

export default async function Page(props: TPage) {
  const portfolio = await getAllContent(props.params.locale, 'portfolio');
  const t = await getTranslations({
    locale: props.params.locale,
  });

  if (!portfolio) return null;

  sortByKeyDesc(portfolio, 'date');

  return (
    <>
      <section className='mb-10'>
        <h1 className='text-3xl font-bold mb-5'>
          {t('metadata.portfolio.title')}
        </h1>
        <p>{t('metadata.portfolio.description')}</p>
      </section>
      <ul className='flex flex-wrap gap-6'>
        {portfolio.map((portfolioItem) => (
          <li key={portfolioItem.slug}>
            <ItemCard
              {...portfolioItem}
              type='projects'
              lang={props.params.locale}
            />
          </li>
        ))}
      </ul>
    </>
  );
}
