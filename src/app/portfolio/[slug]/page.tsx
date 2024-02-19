import Mdx from '@/components/mdx-component';
import { Metadata } from 'next';
import { getAllContent, getContent } from '@/utils/getContent';

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
    title: `juancmandev | ${portfolio.title}`,
    description: portfolio.description,
    openGraph: {
      type: 'article',
      locale: 'en',
      title: `juancmandev | ${portfolio.title}`,
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

  return <Mdx code={portfolio.body.code} />;
}
