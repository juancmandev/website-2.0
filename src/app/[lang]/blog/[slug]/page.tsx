import fs from 'fs';
import Markdown from 'markdown-to-jsx';
import matter from 'gray-matter';
import { getPostEnMetadata, getPostEsMetadata } from '@/utils/getPostMetadata';
import Image from 'next/image';
import { Locale } from '@/dictionaries/i18n-config';

const getPostContent = (slug: string, lang: string) => {
  const file = `src/posts/${lang}/${slug}.md`;
  const content = fs.readFileSync(file, 'utf8');
  const matterResult = matter(content);

  return matterResult;
};

export const generateStaticParams = async ({
  params,
}: {
  params: { lang: Locale };
}) => {
  const { lang } = params;

  if (lang === 'en') {
    return getPostEnMetadata().map((post) => ({
      slug: post.slug,
      lang,
    }));
  } else if (lang === 'es') {
    return getPostEsMetadata().map((post) => ({
      slug: post.slug,
      lang,
    }));
  }
};

const PostPage = ({
  params: { slug, lang },
}: {
  params: { slug: string; lang: Locale };
}) => {
  const post = getPostContent(slug, lang);

  return (
    <>
      <header className='mb-[40px] text-center max-w-[65ch] mx-auto flex flex-col gap-[8px]'>
        <figure className='w-full'>
          <Image
            style={{
              objectFit: 'contain',
              position: 'relative',
              minWidth: '100%',
            }}
            width={300}
            height={100}
            src={post.data.featuredImage}
            alt={`${post.data.title} image`}
          />
          <figcaption className='text-sm font-light'>
            {post.data.featuredImageCaption}
          </figcaption>
        </figure>

        <h1 className='text-4xl font-bold'>{post.data.title}</h1>
        <p className='text-md font-light'>
          {new Date(post.data.date).toLocaleDateString('en-US')}
        </p>
      </header>

      <article className='prose prose-invert mx-auto prose-a:transition-colors prose-a:no-underline prose-a:text-primary hover:prose-a:underline hover:prose-a:text-primaryLight'>
        <Markdown>{post.content}</Markdown>
      </article>
    </>
  );
};

export default PostPage;
