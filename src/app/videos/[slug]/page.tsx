import Mdx from '@/components/mdx-component';
import { Metadata } from 'next';
import { getAllContent, getContent } from '@/utils/get-content';
import formatDate from '@/utils/format-date';

type TParams = {
  slug: string;
};

export async function generateStaticParams(): Promise<TParams[]> {
  const videos = await getAllContent('videos');

  if (!videos) return [];

  return videos.map((video) => ({
    slug: video.slug,
  }));
}

type TPage = {
  params: {
    slug: string;
  };
};

export async function generateMetadata(props: TPage): Promise<Metadata> {
  const video = await getContent('videos', props.params.slug);

  if (!video) return {};

  return {
    title: video.title,
    description: video.description,
    openGraph: {
      type: 'article',
      locale: 'en',
      title: video.title,
      description: video.description,
      publishedTime: video.date ? new Date(video.date).toISOString() : '',
      authors: video.author,
      images: [
        {
          url: video.image || '',
          width: 1200,
          height: 675,
          alt: video.imageCaption,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: video.title,
      description: video.description,
      creator: '@juancmandev',
      images: {
        width: 1200,
        height: 675,
        url: video.image || '',
        alt: video.imageCaption,
      },
    },
  };
}

export default async function Page(props: TPage) {
  const video = await getContent('videos', props.params.slug);

  if (!video) return null;

  return (
    <article className='prose prose-invert mx-auto'>
      <h1>{video.title}</h1>
      <Mdx code={video.body.code} />
      <hr />
      <p>
        <strong>Posted: </strong>
        {video.date && formatDate(new Date(video.date))}
      </p>
    </article>
  );
}
