import { Mdx } from '@/components';
import { LangProps, PageProps, StaticSlugLangProps } from '@/interfaces';
import { Metadata } from 'next';
import { getBlogFromParams, getBlogsFromParams } from '@/utils/getContent';

export async function generateStaticParams(
  props: LangProps
): Promise<StaticSlugLangProps[]> {
  const blogs = await getBlogsFromParams(props.params.lang);

  return blogs.map((blog) => ({
    slug: blog.slug,
    lang: props.params.lang,
  }));
}

export async function generateMetadata(props: PageProps): Promise<Metadata> {
  const blog = await getBlogFromParams(props.params.slug, props.params.lang);

  return {
    title: blog.title,
    description: blog.subtitle,
    openGraph: {
      type: 'article',
      locale: props.params.lang,
      title: blog.title,
      description: blog.subtitle,
      publishedTime: new Date(blog.date).toISOString(),
      authors: blog.author,
      images: [
        {
          url: blog.featuredImage,
          width: 1200,
          height: 675,
          alt: blog.featuredImageCaption,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: blog.title,
      description: blog.subtitle,
      creator: '@juancmandev',
      images: {
        width: 1200,
        height: 675,
        url: blog.featuredImage,
        alt: blog.featuredImageCaption,
      },
    },
  };
}

export default async function Page(props: PageProps) {
  const post = await getBlogFromParams(props.params.slug, props.params.lang);

  return <Mdx code={post.body.code} />;
}
