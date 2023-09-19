import { Mdx } from '@/components/MdxComponent';
import { PageProps } from '@/interfaces/ContentPage.model';
import { Metadata } from 'next';
import { getBlogFromParams } from '@/utils/getContent';

export async function generateMetadata(props: PageProps): Promise<Metadata> {
  const { params } = props;
  const blog = await getBlogFromParams(params.slug, params.lang);

  return {
    title: blog.title,
    description: blog.subtitle,
    openGraph: {
      type: 'article',
      locale: params.lang,
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

export default async function Page({ params }: PageProps) {
  const post = await getBlogFromParams(params.slug, params.lang);

  return <Mdx code={post.body.code} />;
}
