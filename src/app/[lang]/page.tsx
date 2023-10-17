import ItemCard from '@/components/ItemCard';
import {
  getBlogsFromParams,
  getMainPage,
  getProjectsFromParams,
} from '@/utils/getContent';
import { getDictionary } from '@/utils/getDictionary';
import { Locale } from '@/dictionaries/i18n-config';
import { sortByKeyDesc } from '@/utils/sorts';
import type { Metadata } from 'next';
import { PageProps } from '@/interfaces/ContentPage.model';

export async function generateMetadata(props: PageProps): Promise<Metadata> {
  const page = await getMainPage(props.params.lang);

  return {
    title: page.title,
    description: page.description,
  };
}

export default async function Page({ params }: { params: { lang: Locale } }) {
  const { lang } = params;
  const dictionary = await getDictionary(lang);
  const blogs = await getBlogsFromParams(lang);
  sortByKeyDesc(blogs, 'date');
  const last3Blogs = blogs.slice(0, 3);

  const projects = await getProjectsFromParams(lang);
  sortByKeyDesc(projects, 'date');
  const last3Projects = projects.slice(0, 3);

  return (
    <div className='flex flex-col gap-20'>
      <section className='flex flex-col gap-1'>
        <h2 className='text-4xl'>{dictionary.home.hello_iam} Juan Manzanero</h2>
        <h1 className='primary-gradient text-4xl font-bold'>
          Frontend Developer
        </h1>
        <p className='font-thin text-lg'>{dictionary.home.my_web_1}</p>
        <p className='font-thin text-lg'>{dictionary.home.my_web_2}</p>
      </section>

      <section>
        <h2 className='text-3xl text-primary'>
          {dictionary.home.latest_posts}
        </h2>
        <ul className='max-w-max mt-8 flex flex-col lg:flex-row gap-6'>
          {last3Blogs.map((blog) => (
            <li key={blog.slug}>
              <ItemCard {...blog} lang={lang} type='blog' />
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2 className='text-3xl text-primary'>
          {dictionary.home.latest_projects}
        </h2>
        <ul className='max-w-max mt-8 flex flex-col lg:flex-row gap-6'>
          {last3Projects.length > 0 ? (
            last3Projects.map((project) => (
              <li key={project.slug}>
                <ItemCard {...project} lang={lang} type='projects' />
              </li>
            ))
          ) : (
            <p className='font-thin'>{dictionary.home.no_projects}</p>
          )}
        </ul>
      </section>
    </div>
  );
}
