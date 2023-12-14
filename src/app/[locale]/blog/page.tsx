import { ItemCard } from '@/components';
import { TPage, TParamsLocale } from '@/types';
import { getAllContent, getContent } from '@/utils/getContent';
import { sortByKeyDesc } from '@/utils/sorts';
import { getDictionary } from '@/utils/getDictionary';
import { Metadata } from 'next';

export async function generateMetadata(
  props: TParamsLocale
): Promise<Metadata> {
  const blogData = await getContent(props.params.locale, 'main', 'blog');

  if (!blogData) return {};

  return {
    title: blogData.title,
    description: blogData.description,
  };
}

export default async function Page(props: TPage) {
  const posts = await getAllContent(props.params.locale, 'blog');

  if (!posts) return null;

  sortByKeyDesc(posts, 'date');

  const dictionary = await getDictionary(props.params.locale);

  return (
    <>
      <h1 className='text-4xl font-bold mb-2'>Blog</h1>
      <p className='mb-8'>{dictionary.blog.description_1}</p>

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
          <h2 className='text-2xl font-bold mb-4'>
            {dictionary.blog.thoughts}
          </h2>
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
