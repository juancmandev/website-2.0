import fs from 'fs';
import Markdown from 'markdown-to-jsx';
import matter from 'gray-matter';
import { getPostEnMetadata, getPostEsMetadata } from '@/utils/getPostMetadata';
import Image from 'next/image';
import { Locale } from '@/dictionaries/i18n-config';
import Chip from '@/components/Chip';
import months from '@/utils/months';

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
}): Promise<any> => {
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

export const generateMetadata = async ({
  params: { slug, lang },
}: {
  params: { slug: string; lang: Locale };
}) => {
  const post = getPostContent(slug, lang);

  return {
    title: post.data.title,
    description: post.data.subtitle,
    openGraph: {
      type: 'article',
      locale: lang,
      title: post.data.title,
      description: post.data.subtitle,
      publishedTime: new Date(post.data.date).toISOString(),
      authors: ['Juan Carlos Manzanero Domínguez | @juancmandev'],
      images: [
        {
          url: post.data.featuredImage,
          width: 1200,
          height: 675,
          alt: post.data.featuredImageCaption,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.data.title,
      description: post.data.subtitle,
      creator: '@juancmandev',
      images: {
        width: 1200,
        height: 675,
        url: post.data.featuredImage,
        alt: post.data.featuredImageCaption,
      },
    },
  };
};

const PostPage = ({
  params: { slug, lang },
}: {
  params: { slug: string; lang: Locale };
}) => {
  const post = getPostContent(slug, lang);

  return (
    <>
      <header className='mb-[40px] max-w-[65ch] mx-auto flex flex-col gap-[16px]'>
        <figure className='w-full'>
          <Image
            priority
            width='0'
            height='0'
            sizes='100vw'
            className='w-full h-auto'
            src={post.data.featuredImage}
            alt={`${post.data.title} image`}
          />
          <figcaption className='text-sm font-light'>
            {post.data.featuredImageCaption}
          </figcaption>
        </figure>

        <div>
          <h1 className='text-4xl font-bold'>{post.data.title}</h1>
          <p className='text-md font-light'>
            {lang && (
              <span>
                {months(lang, new Date(post.data.date).getMonth())}{' '}
                {new Date(post.data.date).getDate()},{' '}
                {new Date(post.data.date).getFullYear()}
              </span>
            )}
          </p>
        </div>

        <section className='flex flex-wrap gap-[4px] justify-start'>
          {post.data.tags &&
            post.data.tags.map((tag: string) => <Chip key={tag} tag={tag} />)}
        </section>
      </header>

      <article className='prose prose-invert mx-auto prose-a:transition-colors prose-a:no-underline prose-a:text-primary hover:prose-a:underline hover:prose-a:text-primaryLight'>
        <Markdown
          options={{ overrides: { a: { props: { target: '_blank' } } } }}>
          {post.content}
        </Markdown>
      </article>
    </>
  );
};

export default PostPage;
