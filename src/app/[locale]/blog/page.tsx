import { ItemCard } from '@/components';
import { TPage, TParamsLocale } from '@/types';
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
    title: t('metadata.home.title'),
    description: t('metadata.home.description'),
  };
}

export default async function Page(props: TPage) {
  const t = await getTranslations({
    locale: props.params.locale,
  });
  const posts = await getAllContent(props.params.locale, 'blog');

  if (!posts) return null;

  sortByKeyDesc(posts, 'date');

  return (
    <>
      <section className='mb-10'>
        <h1 className='text-3xl font-bold mb-5'>{t('metadata.blog.title')}</h1>
        <p>{t('metadata.blog.description')}</p>
      </section>
      <div className='flex flex-col gap-10'>
        <section>
          <h2 className='text-2xl font-bold mb-4'>Tech</h2>
          <ul className='flex flex-wrap gap-6'>
            {posts.map((post) => {
              if (post.tags?.includes('Tech')) {
                return (
                  <li key={post.slug}>
                    <ItemCard
                      {...post}
                      type='blog'
                      lang={props.params.locale}
                    />
                  </li>
                );
              }
            })}
          </ul>
        </section>
        <section>
          <h2 className='text-2xl font-bold mb-4'>{t('blog.thoughts')}</h2>
          <ul className='flex flex-wrap gap-6'>
            {posts.map((post) => {
              if (post.tags?.includes('Thoughts')) {
                return (
                  <li key={post.slug}>
                    <ItemCard
                      {...post}
                      type='blog'
                      lang={props.params.locale}
                    />
                  </li>
                );
              }
            })}
          </ul>
        </section>
      </div>
    </>
  );
}
