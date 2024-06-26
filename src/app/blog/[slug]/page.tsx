import Mdx from '@/components/mdx-component';
import { Metadata } from 'next';
import { getAllContent, getContent } from '@/utils/get-content';
import formatDate from '@/utils/format-date';

type TParams = {
  slug: string;
};

export async function generateStaticParams(): Promise<TParams[]> {
  const blogs = await getAllContent('blog');

  if (!blogs) return [];

  return blogs.map((blog) => ({
    slug: blog.slug,
  }));
}

type TPage = {
  params: {
    slug: string;
  };
};

export async function generateMetadata(props: TPage): Promise<Metadata> {
  const blog = await getContent('blog', props.params.slug);

  if (!blog) return {};

  return {
    title: blog.title,
    description: blog.description,
    openGraph: {
      type: 'article',
      locale: 'en',
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
  const post = await getContent('blog', props.params.slug);

  if (!post) return null;

  return (
    <article className='prose prose-invert mx-auto'>
      <h1>{post.title}</h1>
      <Mdx code={post.body.code} />
      <hr />
      <p>
        <strong>Posted: </strong>
        {post.date && formatDate(new Date(post.date))}
      </p>
    </article>
  );
}
