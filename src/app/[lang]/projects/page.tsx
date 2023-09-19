import BlogCard from '@/components/ItemCard';
import { PageProps } from '@/interfaces/ContentPage.model';
import { getProjectsFromParams } from '@/utils/getContent';

export default async function Page({ params }: PageProps) {
  const projects = await getProjectsFromParams(params.lang);

  return (
    <>
      <h1 className='text-3xl font-bold mb-10'>Projects</h1>
      <ul className='flex flex-wrap gap-6'>
        {projects.map((project) => (
          <li key={project.slug}>
            <BlogCard
              type='projects'
              featuredImage={project.featuredImage}
              featuredImageCaption={project.featuredImageCaption}
              title={project.title}
              date={project.date}
              tags={project.tags}
              subtitle={project.subtitle}
              slug={project.slug}
              lang={params.lang}
            />
          </li>
        ))}
      </ul>
    </>
  );
}
