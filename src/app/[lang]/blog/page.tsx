import { Locale } from '@/dictionaries/i18n-config';
import { getPostEnMetadata, getPostEsMetadata } from '@/utils/getPostMetadata';
import BlogCard from '@/components/ItemCard';

export const generateStaticParams = async () => {
  return [{ lang: 'en' }, { lang: 'es' }];
};

const BlogPage = ({
  params: { lang },
}: {
  params: {
    lang: Locale;
  };
}) => {
  const postMetadata =
    lang === 'en' ? getPostEnMetadata() : getPostEsMetadata();

  return (
    <>
      <h1 className='text-3xl font-bold mb-[40px]'>Blog</h1>
      <ul className='flex flex-wrap gap-[32px]'>
        {postMetadata.map((post) => (
          <li key={post.slug}>
            <BlogCard lang={lang} {...post} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default BlogPage;
