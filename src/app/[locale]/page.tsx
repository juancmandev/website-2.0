import { ItemCard } from '@/components';
import { getAllContent } from '@/utils/getContent';
import { getDictionary } from '@/utils/getDictionary';
import { sortByKeyDesc } from '@/utils/sorts';
import type { Metadata } from 'next';
import { TParamsLocale, TPage } from '@/types';
import { getTranslations } from 'next-intl/server';

export async function generateMetadata(props: TPage): Promise<Metadata> {
  const t = await getTranslations({
    locale: props.params.locale,
  });

  return {
    title: t('home.title'),
    description: t('home.description'),
  };
}

export default async function Page(props: TParamsLocale) {
  const dictionary = await getDictionary(props.params.locale);

  const blogs = await getAllContent(props.params.locale, 'blog');

  sortByKeyDesc(blogs!, 'date');
  const last3Blogs = blogs && blogs.slice(0, 3);

  const projects = await getAllContent(props.params.locale, 'projects');
  sortByKeyDesc(projects!, 'date');
  const last3Projects = projects && projects.slice(0, 3);

  return (
    <div className='flex flex-col gap-20'>
      <section className='flex flex-col gap-1'>
        <h2 className='text-4xl'>{dictionary.home.hello_iam} Juan Manzanero</h2>
        <h1 className='primary-gradient text-4xl font-bold'>
          Full Stack Developer
        </h1>
        <p className='font-thin text-lg'>{dictionary.home.my_web_1}</p>
        <p className='font-thin text-lg'>{dictionary.home.my_web_2}</p>
      </section>

      <section>
        <h2 className='text-3xl text-primary'>
          {dictionary.home.latest_posts}
        </h2>
        <ul className='max-w-max mt-8 flex flex-col lg:flex-row gap-6'>
          {last3Blogs &&
            last3Blogs.map((blog) => (
              <li key={blog.slug}>
                <ItemCard {...blog} lang={props.params.locale} type='blog' />
              </li>
            ))}
        </ul>
      </section>

      <section>
        <h2 className='text-3xl text-primary'>
          {dictionary.home.latest_projects}
        </h2>
        <ul className='max-w-max mt-8 flex flex-col lg:flex-row gap-6'>
          {last3Projects && last3Projects.length > 0 ? (
            last3Projects.map((project) => (
              <li key={project.slug}>
                <ItemCard
                  {...project}
                  lang={props.params.locale}
                  type='projects'
                />
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
