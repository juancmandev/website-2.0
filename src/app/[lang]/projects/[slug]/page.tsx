import { Mdx } from '@/components';
import { PageProps, LangProps, StaticSlugLangProps } from '@/interfaces';
import { Metadata } from 'next';
import {
  getProjectFromParams,
  getProjectsFromParams,
} from '@/utils/getContent';

export async function generateStaticParams(
  props: LangProps
): Promise<StaticSlugLangProps[]> {
  const projects = await getProjectsFromParams(props.params.lang);

  return projects.map((project) => ({
    slug: project.slug,
    lang: props.params.lang,
  }));
}

export async function generateMetadata(props: PageProps): Promise<Metadata> {
  const project = await getProjectFromParams(
    props.params.slug,
    props.params.lang
  );

  return {
    title: project.title,
    description: project.subtitle,
    openGraph: {
      type: 'article',
      locale: props.params.lang,
      title: project.title,
      description: project.subtitle,
      publishedTime: new Date(project.date).toISOString(),
      authors: project.author,
      images: [
        {
          url: project.featuredImage,
          width: 1200,
          height: 675,
          alt: project.featuredImageCaption,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: project.title,
      description: project.subtitle,
      creator: '@juancmandev',
      images: {
        width: 1200,
        height: 675,
        url: project.featuredImage,
        alt: project.featuredImageCaption,
      },
    },
  };
}

export default async function Page(props: PageProps) {
  const project = await getProjectFromParams(
    props.params.slug,
    props.params.lang
  );

  return <Mdx code={project.body.code} />;
}
