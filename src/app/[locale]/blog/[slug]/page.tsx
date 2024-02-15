import Mdx from '@/components/mdx-component';
import { TParamsLocale, TPage, TSlugLang } from '@/types';
import { Metadata } from 'next';
import { getAllContent, getContent } from '@/utils/getContent';

export async function generateStaticParams(
  props: TParamsLocale
): Promise<TSlugLang[]> {
  const blogs = await getAllContent(props.params.locale, 'blog');

  if (!blogs) return [];

  return blogs.map((blog) => ({
    slug: blog.slug,
    locale: props.params.locale,
  }));
}

export async function generateMetadata(props: TPage): Promise<Metadata> {
  const blog = await getContent(props.params.locale, 'blog', props.params.slug);

  if (!blog) return {};

  return {
    title: blog.title,
    description: blog.description,
    openGraph: {
      type: 'article',
      locale: props.params.locale,
      title: blog.title,
      description: blog.description,
      publishedTime: blog.date ? new Date(blog.date).toISOString() : '',
      authors: blog.author,
      images: [
        {
          url: blog.image || '',
          width: 1200,
          height: 675,
          alt: blog.imageCaption,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: blog.title,
      description: blog.description,
      creator: '@juancmandev',
      images: {
        width: 1200,
        height: 675,
        url: blog.image || '',
        alt: blog.imageCaption,
      },
    },
  };
}

export default async function Page(props: TPage) {
  const post = await getContent(props.params.locale, 'blog', props.params.slug);

  if (!post) return null;

  return <Mdx code={post.body.code} />;
}
