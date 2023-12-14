import { ItemCard } from '@/components';
import { TParamsLocale, TPage } from '@/types';
import { getAllContent, getContent } from '@/utils/getContent';
import { sortByKeyDesc } from '@/utils/sorts';
import { Metadata } from 'next';

export async function generateMetadata(
  props: TParamsLocale
): Promise<Metadata> {
  const projectsData = await getContent(
    props.params.locale,
    'main',
    'projects'
  );

  if (!projectsData) return {};

  return {
    title: projectsData.title,
    description: projectsData.description,
  };
}

export default async function Page(props: TPage) {
  const projects = await getAllContent(props.params.locale, 'projects');

  if (!projects) return null;

  sortByKeyDesc(projects, 'date');

  return (
    <>
      <h1 className='text-3xl font-bold mb-10'>Projects</h1>
      <ul className='flex flex-wrap gap-6'>
        {projects.map((project) => (
          <li key={project.slug}>
            <ItemCard {...project} type='projects' lang={props.params.locale} />
          </li>
        ))}
      </ul>
    </>
  );
}
