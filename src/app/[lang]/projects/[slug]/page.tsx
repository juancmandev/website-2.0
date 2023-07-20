import fs from 'fs';
import Markdown from 'markdown-to-jsx';
import matter from 'gray-matter';
import {
  getProjectEnMetadata,
  getProjectsEsMetadata,
} from '@/utils/getProjectMetadata';
import Image from 'next/image';
import { Locale } from '@/dictionaries/i18n-config';
import { DateIcon, GithubIcon, PersonIcon, WebIcon } from '@/assets/Icons';
import Chip from '@/components/Chip';
import months from '@/utils/months';
import { Metadata } from 'next';

const getProjectContent = (slug: string, lang: string) => {
  const file = `src/projects/${lang}/${slug}.md`;
  const content = fs.readFileSync(file, 'utf8');
  const matterResult = matter(content);

  return matterResult;
};

export async function generateStaticParams({
  params,
}: {
  params: { lang: Locale };
}): Promise<any> {
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
}

export async function generateMetadata({
  params: { slug, lang },
}: {
  params: { slug: string; lang: Locale };
}): Promise<Metadata> {
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
      authors: project.data.author,
      images: [
        {
          url: project.data.featuredImage,
          width: 1200,
          height: 675,
          alt: project.data.featuredImageCaption,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: project.data.title,
      description: project.data.subtitle,
      creator: '@juancmandev',
      images: {
        width: 1200,
        height: 675,
        url: project.data.featuredImage,
        alt: project.data.featuredImageCaption,
      },
    },
  };
}

export default function ProjectPage({
  params: { slug, lang },
}: {
  params: { slug: string; lang: Locale };
}) {
  const project = getProjectContent(slug, lang);

  return (
    <>
      <header className='mb-10 max-w-[65ch] mx-auto flex flex-col gap-6'>
        <figure className='w-full flex flex-col gap-2'>
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

        <div className='flex flex-col gap-4'>
          <h1 className='text-4xl font-bold'>{project.data.title}</h1>
          <p className='font-light flex items-center gap-2'>
            <DateIcon size='1rem' />
            {lang === 'en' ? (
              <span className='mt-[2px]'>
                {months(lang, new Date(project.data.date).getMonth())}{' '}
                {new Date(project.data.date).getDate()},{' '}
                {new Date(project.data.date).getFullYear()}
              </span>
            ) : (
              <span className='mt-[2px]'>
                {new Date(project.data.date).getDate()} de{' '}
                {months(lang, new Date(project.data.date).getMonth())} del{' '}
                {new Date(project.data.date).getFullYear()}
              </span>
            )}
          </p>
          <p className='flex items-center gap-1'>
            <PersonIcon size='1rem' />
            {project.data.author}
          </p>
        </div>

        <section className='flex flex-wrap gap-1 justify-start'>
          {project.data.tags &&
            project.data.tags.map((tag: string) => (
              <Chip key={tag} tag={tag} />
            ))}
        </section>
        {(project.data.repo || project.data.url) && (
          <div className='flex justify-start gap-2 my-3'>
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
        <Markdown
          options={{ overrides: { a: { props: { target: '_blank' } } } }}>
          {project.content}
        </Markdown>
      </article>
    </>
  );
}
