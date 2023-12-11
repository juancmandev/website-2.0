import { ItemCard } from '@/components';
import { TPage, TParamsLang } from '@/types';
import { getBlogData, getBlogsFromParams } from '@/utils/getContent';
import { sortByKeyDesc } from '@/utils/sorts';
import { getDictionary } from '@/utils/getDictionary';
import { Metadata } from 'next';

export async function generateMetadata(props: TParamsLang): Promise<Metadata> {
  const blogData = await getBlogData(props.params.lang);

  return {
    title: blogData.title,
    description: blogData.description,
  };
}

export default async function Page(props: TPage) {
  const posts = await getBlogsFromParams(props.params.lang);
  sortByKeyDesc(posts, 'date');

  const dictionary = await getDictionary(props.params.lang);

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
                    <ItemCard {...post} type='blog' lang={props.params.lang} />
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
                    <ItemCard {...post} type='blog' lang={props.params.lang} />
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
