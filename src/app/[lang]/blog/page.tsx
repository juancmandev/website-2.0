import BlogCard from '@/components/ItemCard';
import { PageProps } from '@/interfaces/ContentPage.model';
import { getBlogsFromParams } from '@/utils/getContent';

export default async function Page({ params }: PageProps) {
  const posts = await getBlogsFromParams(params.lang);

  return (
    <>
      <h1 className='text-3xl font-bold mb-10'>Blog</h1>
      <ul className='flex flex-wrap gap-6'>
        {posts.map((post) => (
          <li key={post.slug}>
            <BlogCard
              type='blog'
              featuredImage={post.featuredImage}
              featuredImageCaption={post.featuredImageCaption}
              title={post.title}
              date={post.date}
              tags={post.tags}
              subtitle={post.subtitle}
              slug={post.slug}
              lang={params.lang}
            />
          </li>
        ))}
      </ul>
    </>
  );
}
