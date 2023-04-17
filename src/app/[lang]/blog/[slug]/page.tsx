import fs from 'fs';
import Markdown from 'markdown-to-jsx';
import matter from 'gray-matter';
import { getPostEnMetadata, getPostEsMetadata } from '@/utils/getPostMetadata';
import Image from 'next/image';
import { Locale } from '@/dictionaries/i18n-config';
import Chip from '@/components/Chip';

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
    robots: {
      index: true,
      nocache: false,
      follow: true,
      googleBot: {
        index: true,
        noimageindex: false,
        'max-image-preview': 'large',
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
      <header className='mb-[40px] text-center max-w-[65ch] mx-auto flex flex-col gap-[32px]'>
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

        <div className='flex flex-col gap-[16px]'>
          <h1 className='text-4xl font-bold'>{post.data.title}</h1>
          <p className='text-md font-light'>
            {new Date(post.data.date).toLocaleDateString(
              lang === 'en' ? 'en-US' : 'es-MX'
            )}
          </p>
          <section className='flex flex-wrap gap-[4px] justify-center'>
            {post.data.tags &&
              post.data.tags.map((tag: string) => <Chip key={tag} tag={tag} />)}
          </section>
        </div>
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
