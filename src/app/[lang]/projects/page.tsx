import BlogCard from '@/components/ItemCard';
import { Locale } from '@/dictionaries/i18n-config';
import { getDictionary } from '@/utils/getDictionary';
import {
  getProjectEnMetadata,
  getProjectsEsMetadata,
} from '@/utils/getProjectMetadata';

export const generateStaticParams = async () => {
  return [{ lang: 'en' }, { lang: 'es' }];
};

const ProjectsPage = async ({
  params: { lang },
}: {
  params: {
    lang: Locale;
  };
}) => {
  const dictionary = await getDictionary(lang);
  const projectsMetadata =
    lang === 'en' ? getProjectEnMetadata() : getProjectsEsMetadata();

  return (
    <>
      <h1 className='text-3xl font-bold mb-[40px]'>
        {dictionary.projects.title}
      </h1>
      <ul className='flex flex-wrap gap-[32px]'>
        {projectsMetadata.map((project) => (
          <li key={project.slug}>
            <BlogCard lang={lang} {...project} type='projects' />
          </li>
        ))}
      </ul>
    </>
  );
};

export default ProjectsPage;