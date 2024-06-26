import Mdx from '@/components/mdx-component';
import { Metadata } from 'next';
import { getAllContent, getContent } from '@/utils/get-content';
import formatDate from '@/utils/format-date';

type TParams = {
  slug: string;
};

export async function generateStaticParams(): Promise<TParams[]> {
  const portfolio = await getAllContent('portfolio');

  if (!portfolio) return [];

  return portfolio.map((portfolioItem) => ({
    slug: portfolioItem.slug,
  }));
}

type TPage = {
  params: {
    slug: string;
  };
};

export async function generateMetadata(props: TPage): Promise<Metadata> {
  const portfolio = await getContent('portfolio', props.params.slug);

  if (!portfolio) return {};

  return {
    title: portfolio.title,
    description: portfolio.description,
    openGraph: {
      type: 'article',
      locale: 'en',
      title: portfolio.title,
      description: portfolio.description,
      publishedTime: new Date(portfolio.date || '').toISOString(),
      authors: portfolio.author,
      images: [
        {
          url: portfolio.image || '',
          width: 1200,
          height: 675,
          alt: portfolio.imageCaption,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: portfolio.title,
      description: portfolio.description,
      creator: '@juancmandev',
      images: {
        width: 1200,
        height: 675,
        url: portfolio.image || '',
        alt: portfolio.imageCaption,
      },
    },
  };
}

export default async function Page(props: TPage) {
  const portfolio = await getContent('portfolio', props.params.slug);

  if (!portfolio) return null;

  return (
    <article className='prose prose-invert mx-auto'>
      <h1>{portfolio.title}</h1>
      <Mdx code={portfolio.body.code} />
      <hr />
      <p>
        <strong>Posted: </strong>
        {portfolio.date && formatDate(new Date(portfolio.date))}
      </p>
    </article>
  );
}
