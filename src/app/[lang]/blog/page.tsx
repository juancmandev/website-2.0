import BlogCard from '@/components/ItemCard';
import { PageProps } from '@/interfaces/ContentPage.model';
import { getBlogsFromParams } from '@/utils/getContent';
import { sortByKeyDesc } from '@/utils/sorts';
import { getDictionary } from '@/utils/getDictionary';

export default async function Page({ params }: PageProps) {
  const posts = await getBlogsFromParams(params.lang);
  sortByKeyDesc(posts, 'date');

  const dictionary = await getDictionary(params.lang);

  return (
    <>
      <h1 className='text-4xl font-bold mb-2'>Blog</h1>
      <p className='mb-8'>{dictionary.blog.description_1}</p>

      <div className='flex flex-col gap-10'>
        <section>
          <h2 className='text-2xl font-bold mb-4'>Tech</h2>
          <ul className='flex flex-wrap gap-6'>
            {posts.map((post) => {
              if (post.tags.includes('Tech')) {
                return (
                  <li key={post.slug}>
                    <BlogCard {...post} type='blog' lang={params.lang} />
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
              if (post.tags.includes('Thoughts')) {
                return (
                  <li key={post.slug}>
                    <BlogCard {...post} type='blog' lang={params.lang} />
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
