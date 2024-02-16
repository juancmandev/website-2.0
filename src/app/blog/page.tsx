import ItemCard from '@/components/item-card';
import { getAllContent } from '@/utils/getContent';
import { sortByKeyDesc } from '@/utils/sorts';
import { Metadata } from 'next';

export const metadata: Metadata = {};

export default async function Page() {
  const posts = await getAllContent('blog');

  if (!posts) return null;

  sortByKeyDesc(posts, 'date');

  return (
    <>
      <section className='mb-10'>
        <h1 className='text-3xl font-bold mb-5'>Blog</h1>
        <p>Long format about thoughts and other topics.</p>
      </section>
      <div className='flex flex-col gap-10'>
        <section>
          <h2 className='text-2xl font-bold mb-4'>Tech</h2>
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
          <h2 className='text-2xl font-bold mb-4'>Thoughts</h2>
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
      </div>
    </>
  );
}
