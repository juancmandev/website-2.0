import Mdx from '@/components/mdx-component';
import { TParamsLocale, TPage } from '@/types';
import { Metadata } from 'next';
import { getAllContent, getContent } from '@/utils/getContent';
import { TSlugLang } from '@/types';

export async function generateStaticParams(
  props: TParamsLocale
): Promise<TSlugLang[]> {
  const portfolio = await getAllContent(props.params.locale, 'portfolio');

  if (!portfolio) return [];

  return portfolio.map((portfolioItem) => ({
    slug: portfolioItem.slug,
    locale: props.params.locale,
  }));
}

export async function generateMetadata(props: TPage): Promise<Metadata> {
  const portfolio = await getContent(
    props.params.locale,
    'portfolio',
    props.params.slug
  );

  if (!portfolio) return {};

  return {
    title: portfolio.title,
    description: portfolio.description,
    openGraph: {
      type: 'article',
      locale: props.params.locale,
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
  const portfolio = await getContent(
    props.params.locale,
    'portfolio',
    props.params.slug
  );

  if (!portfolio) return null;

  return <Mdx code={portfolio.body.code} />;
}
