import fs from 'fs';
import Markdown from 'markdown-to-jsx';
import matter from 'gray-matter';
import {
  getProjectEnMetadata,
  getProjectsEsMetadata,
} from '@/utils/getProjectMetadata';
import Image from 'next/image';
import { Locale } from '@/dictionaries/i18n-config';
import { GithubIcon, WebIcon } from '@/assets/Icons';

const getProjectContent = (slug: string, lang: string) => {
  const file = `src/projects/${lang}/${slug}.md`;
  const content = fs.readFileSync(file, 'utf8');
  const matterResult = matter(content);

  return matterResult;
};

export const generateStaticParams = async ({
  params,
}: {
  params: { lang: Locale };
}): Promise<any> => {
  const { lang } = params;

  if (lang === 'en') {
    return getProjectEnMetadata().map((project) => ({
      slug: project.slug,
      lang,
    }));
  } else if (lang === 'es') {
    return getProjectsEsMetadata().map((project) => ({
      slug: project.slug,
      lang,
    }));
  }
};

export const generateMetadata = async ({
  params: { slug, lang },
}: {
  params: { slug: string; lang: Locale };
}) => {
  const project = getProjectContent(slug, lang);

  return {
    title: project.data.title,
    description: project.data.subtitle,
    openGraph: {
      type: 'article',
      locale: lang,
      title: project.data.title,
      description: project.data.subtitle,
      publishedTime: new Date(project.data.date).toISOString(),
      authors: ['Juan Carlos Manzanero Domínguez | @juancmandev'],
      images: [
        {
          url: project.data.featuredImage,
          width: 800,
          height: 600,
          alt: project.data.featuredImageCaption,
        },
      ],
    },
    robots: {
      index: false,
      follow: true,
      nocache: true,
      googleBot: {
        index: true,
        follow: false,
        noimageindex: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  };
};

const ProjectPage = ({
  params: { slug, lang },
}: {
  params: { slug: string; lang: Locale };
}) => {
  const project = getProjectContent(slug, lang);

  return (
    <>
      <header className='mb-[40px] text-center max-w-[65ch] mx-auto flex flex-col gap-[8px]'>
        <figure className='w-full'>
          <Image
            priority
            width='0'
            height='0'
            sizes='100vw'
            className='w-full h-auto'
            src={project.data.featuredImage}
            alt={`${project.data.title} image`}
          />
          <figcaption className='text-sm font-light'>
            {project.data.featuredImageCaption}
          </figcaption>
        </figure>

        <h1 className='text-4xl font-bold'>{project.data.title}</h1>
        <p className='text-md font-light'>
          {new Date(project.data.date).toLocaleDateString('en-US')}
        </p>
        {(project.data.repo || project.data.url) && (
          <div className='flex justify-center gap-[8px] my-[12px]'>
            {project.data.repo && (
              <a href={project.data.repo} target='_blank'>
                <GithubIcon />
              </a>
            )}
            {project.data.url && (
              <a href={project.data.url} target='_blank'>
                <WebIcon />
              </a>
            )}
          </div>
        )}
      </header>

      <article className='prose prose-invert mx-auto prose-a:transition-colors prose-a:no-underline prose-a:text-primary hover:prose-a:underline hover:prose-a:text-primaryLight'>
        <Markdown>{project.content}</Markdown>
      </article>
    </>
  );
};

export default ProjectPage;