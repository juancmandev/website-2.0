import { ItemCard } from '@/components';
import { LangProps, PageProps } from '@/interfaces';
import { getProjectsData, getProjectsFromParams } from '@/utils/getContent';
import { sortByKeyDesc } from '@/utils/sorts';
import { Metadata } from 'next';

export async function generateMetadata(props: LangProps): Promise<Metadata> {
  const projectsData = await getProjectsData(props.params.lang);

  return {
    title: projectsData.title,
    description: projectsData.description,
  };
}

export default async function Page(props: PageProps) {
  const projects = await getProjectsFromParams(props.params.lang);
  sortByKeyDesc(projects, 'date');

  return (
    <>
      <h1 className='text-3xl font-bold mb-10'>Projects</h1>
      <ul className='flex flex-wrap gap-6'>
        {projects.map((project) => (
          <li key={project.slug}>
            <ItemCard {...project} type='projects' lang={props.params.lang} />
          </li>
        ))}
      </ul>
    </>
  );
}
