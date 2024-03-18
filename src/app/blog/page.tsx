import ItemCard from '@/components/item-card';
import { getAllContent } from '@/utils/get-content';
import { sortByKeyDesc } from '@/utils/sorts';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Long format about thoughts and other topics.',
};

export default async function Page() {
  const posts = await getAllContent('blog');

  if (!posts) return null;

  sortByKeyDesc(posts, 'date');

  return (
    <>
      <section className='mb-10'>
        <h1 className='mb-5 text-3xl font-bold'>Blog</h1>
        <p>Long format about thoughts and other topics.</p>
      </section>
      <div className='flex flex-col gap-10'>
        <section>
          <h2 className='mb-4 text-2xl font-bold'>Tech</h2>
          <ul className='flex flex-wrap gap-6'>
            {posts.map((post) => {
              if (post.tags?.includes('Tech')) {
                return (
                  <li key={post.slug}>
                    <ItemCard {...post} type='blog' />
                  </li>
                );
              }
            })}
          </ul>
        </section>
        <section>
          <h2 className='mb-4 text-2xl font-bold'>Thoughts</h2>
          <ul className='flex flex-wrap gap-6'>
            {posts.map((post) => {
              if (post.tags?.includes('Thoughts')) {
                return (
                  <li key={post.slug}>
                    <ItemCard {...post} type='blog' />
                  </li>
                );
              }
            })}
          </ul>
        </section>
        <section>
          <h2 className='mb-4 text-2xl font-bold'>Personal</h2>
          <ul className='flex flex-wrap gap-6'>
            {posts.map((post) => {
              if (post.tags?.includes('Personal')) {
                return (
                  <li key={post.slug}>
                    <ItemCard {...post} type='blog' />
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
