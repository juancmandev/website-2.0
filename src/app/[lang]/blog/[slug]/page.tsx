import fs from 'fs';
import Markdown from 'markdown-to-jsx';
import matter from 'gray-matter';
import { getPostEnMetadata, getPostEsMetadata } from '@/utils/getPostMetadata';
import Image from 'next/image';
import { Locale } from '@/dictionaries/i18n-config';
import Chip from '@/components/Chip';
import months from '@/utils/months';
import { DateIcon, PersonIcon } from '@/assets/Icons';

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
      authors: [post.data.author],
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

export default function PostPage({
  params: { slug, lang },
}: {
  params: { slug: string; lang: Locale };
}) {
  const post = getPostContent(slug, lang);

  return (
    <>
      <header className='mb-10 max-w-[65ch] mx-auto flex flex-col gap-6'>
        <figure className='w-full flex flex-col gap-2'>
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

        <div className='flex flex-col gap-4'>
          <h1 className='text-4xl font-bold'>{post.data.title}</h1>
          <p className='font-light flex items-center gap-2'>
            <DateIcon size='1rem' />
            {lang === 'en' ? (
              <span className='mt-[2px]'>
                {months(lang, new Date(post.data.date).getMonth())}{' '}
                {new Date(post.data.date).getDate()},{' '}
                {new Date(post.data.date).getFullYear()}
              </span>
            ) : (
              <span className='mt-[2px]'>
                {new Date(post.data.date).getDate()} de{' '}
                {months(lang, new Date(post.data.date).getMonth())} del{' '}
                {new Date(post.data.date).getFullYear()}
              </span>
            )}
          </p>
          <p className='flex items-center gap-1'>
            <PersonIcon size='1rem' />
            {post.data.author}
          </p>
        </div>

        <section className='flex flex-wrap gap-1 justify-start'>
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
}
