import { Mdx } from '@/components';
import { TParamsLocale, TPage } from '@/types';
import { Metadata } from 'next';
import { getAllContent, getContent } from '@/utils/getContent';
import { TSlugLang } from '@/types';

export async function generateStaticParams(
  props: TParamsLocale
): Promise<TSlugLang[]> {
  const projects = await getAllContent(props.params.locale, 'projects');

  if (!projects) return [];

  return projects.map((project) => ({
    slug: project.slug,
    locale: props.params.locale,
  }));
}

export async function generateMetadata(props: TPage): Promise<Metadata> {
  const project = await getContent(
    props.params.locale,
    'projects',
    props.params.slug
  );

  if (!project) return {};

  return {
    title: project.title,
    description: project.description,
    openGraph: {
      type: 'article',
      locale: props.params.locale,
      title: project.title,
      description: project.description,
      publishedTime: new Date(project.date || '').toISOString(),
      authors: project.author,
      images: [
        {
          url: project.image || '',
          width: 1200,
          height: 675,
          alt: project.imageCaption,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: project.title,
      description: project.description,
      creator: '@juancmandev',
      images: {
        width: 1200,
        height: 675,
        url: project.image || '',
        alt: project.imageCaption,
      },
    },
  };
}

export default async function Page(props: TPage) {
  const project = await getContent(
    props.params.locale,
    'projects',
    props.params.slug
  );

  if (!project) return null;

  return <Mdx code={project.body.code} />;
}
