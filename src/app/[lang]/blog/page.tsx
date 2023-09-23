import BlogCard from '@/components/ItemCard';
import { PageProps } from '@/interfaces/ContentPage.model';
import { getBlogsFromParams } from '@/utils/getContent';
import { sortByKeyDesc } from '@/utils/sorts';

export default async function Page({ params }: PageProps) {
  const posts = await getBlogsFromParams(params.lang);
  sortByKeyDesc(posts, 'date');

  return (
    <>
      <h1 className='text-3xl font-bold mb-10'>Blog</h1>
      <ul className='flex flex-wrap gap-6'>
        {posts.map((post) => (
          <li key={post.slug}>
            <BlogCard {...post} type='blog' lang={params.lang} />
          </li>
        ))}
      </ul>
    </>
  );
}
