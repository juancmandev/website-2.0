import BlogCard from '@/components/ItemCard';
import { PageProps } from '@/interfaces/ContentPage.model';
import { getProjectsFromParams } from '@/utils/getContent';
import { sortByKeyDesc } from '@/utils/sorts';

export default async function Page({ params }: PageProps) {
  const projects = await getProjectsFromParams(params.lang);
  sortByKeyDesc(projects, 'date');

  return (
    <>
      <h1 className='text-3xl font-bold mb-10'>Projects</h1>
      <ul className='flex flex-wrap gap-6'>
        {projects.map((project) => (
          <li key={project.slug}>
            <BlogCard {...project} type='projects' lang={params.lang} />
          </li>
        ))}
      </ul>
    </>
  );
}
