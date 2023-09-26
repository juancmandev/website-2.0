import { Mdx } from '@/components/MdxComponent';
import { PageProps } from '@/interfaces/ContentPage.model';
import { Metadata } from 'next';
import {
  getProjectFromParams,
  getProjectsFromParams,
} from '@/utils/getContent';
import { Locale } from '@/dictionaries/i18n-config';

export async function generateStaticParams({
  params,
}: {
  params: { lang: Locale };
}): Promise<any> {
  const { lang } = params;
  const projects = await getProjectsFromParams(lang);

  return projects.map((project) => ({
    slug: project.slug,
    lang,
  }));
}

export async function generateMetadata(props: PageProps): Promise<Metadata> {
  const { params } = props;
  const project = await getProjectFromParams(params.slug, params.lang);

  return {
    title: project.title,
    description: project.subtitle,
    openGraph: {
      type: 'article',
      locale: params.lang,
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

export default async function Page({ params }: PageProps) {
  const project = await getProjectFromParams(params.slug, params.lang);

  return <Mdx code={project.body.code} />;
}
