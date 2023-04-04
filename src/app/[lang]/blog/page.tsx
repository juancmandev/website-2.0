import { Locale } from '@/dictionaries/i18n-config';
import { getPostEnMetadata, getPostEsMetadata } from '@/utils/getPostMetadata';
import BlogCard from '@/components/BlogCard';

export const generateStaticParams = async () => {
  return [{ lang: 'en' }, { lang: 'es' }];
};

const BlogPage = ({ params: { lang } }: { params: { lang: Locale } }) => {
  const postMetadata =
    lang === 'en' ? getPostEnMetadata() : getPostEsMetadata();

  return (
    <div>
      <ul className='flex flex-wrap gap-[32px]'>
        {postMetadata.map((post) => (
          <li key={post.slug}>
            <BlogCard lang={lang} {...post} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BlogPage;
