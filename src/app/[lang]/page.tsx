import ItemCard from '@/components/ItemCard';
import { getPostEnMetadata, getPostEsMetadata } from '@/utils/getPostMetadata';
import {
  getProjectEnMetadata,
  getProjectsEsMetadata,
} from '@/utils/getProjectMetadata';
import { getDictionary } from '@/utils/getDictionary';
import { Locale } from '@/dictionaries/i18n-config';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'juancmandev',
  description: 'Learn about Frontend and Cloud technologies!',
};

export const generateStaticParams = async () => {
  return [{ lang: 'en' }, { lang: 'es' }];
};

const Home = async ({ params: { lang } }: { params: { lang: Locale } }) => {
  const dictionary = await getDictionary(lang);
  const postMetadata =
    lang === 'en' ? getPostEnMetadata() : getPostEsMetadata();
  const last3Posts = postMetadata.slice(0, 3);
  const projectsMetadata =
    lang === 'en' ? getProjectEnMetadata() : getProjectsEsMetadata();
  const last3Projects = projectsMetadata.slice(0, 3);

  return (
    <div className='flex flex-col gap-20'>
      <section className='flex flex-col gap-1'>
        <h2 className='text-3xl'>{dictionary.home.hello_iam} Juan</h2>
        <h1 className='primary-gradient text-4xl font-bold'>
          Frontend Developer
        </h1>
        <p className='font-thin text-lg'>{dictionary.home.my_web_1} </p>
      </section>

      <section>
        <h2 className='text-3xl text-primary'>
          {dictionary.home.latest_posts}
        </h2>
        <p className='font-thin'>{dictionary.home.latest_posts_1}</p>
        <p className='font-thin'>{dictionary.home.latest_posts_2}</p>
        <p className='font-thin'>{dictionary.home.latest_posts_3}</p>
        <ul className='max-w-max mt-8 flex flex-col lg:flex-row gap-3'>
          {last3Posts.map((post) => (
            <li key={post.slug}>
              <ItemCard lang={lang} {...post} type='blog' />
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2 className='text-3xl text-primary'>
          {dictionary.home.latest_projects}
        </h2>
        <p className='font-thin'>{dictionary.home.latest_projects_1}</p>
        <ul className='max-w-max mt-8 flex flex-col lg:flex-row gap-3'>
          {last3Projects.length > 0 ? (
            last3Projects.map((project) => (
              <li key={project.slug}>
                <ItemCard lang={lang} {...project} type='projects' />
              </li>
            ))
          ) : (
            <p className='font-thin'>{dictionary.home.no_projects}</p>
          )}
        </ul>
      </section>
    </div>
  );
};

export default Home;
