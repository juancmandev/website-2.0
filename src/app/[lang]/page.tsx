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
    <div className='grid gap-y-[120px]'>
      <section className='grid gap-y-[4px]'>
        <h2 className='text-3xl'>{dictionary.home.hello_iam} Juan</h2>
        <h1 className='text-4xl text-primary'>Frontend Engineer</h1>
        <p className='font-thin text-lg'>
          {dictionary.home.my_web_1}{' '}
          <span className='font-normal text-primary'>Frontend</span>{' '}
          {dictionary.common.and}{' '}
          <span className='font-normal text-primary'>Cloud</span> engineer.
        </p>
      </section>

      <section>
        <h2 className='text-3xl text-primary'>
          {dictionary.home.latest_posts}
        </h2>
        <p className='font-thin'>{dictionary.home.latest_posts_1}</p>
        <p className='font-thin'>{dictionary.home.latest_posts_2}</p>
        <p className='font-thin'>{dictionary.home.latest_posts_3}</p>
        <ul className='mt-[32px] flex flex-col lg:flex-row gap-[12px] '>
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
        <ul className='mt-[32px] flex flex-col lg:flex-row gap-[12px] '>
          {last3Projects.map((project) => (
            <li key={project.slug}>
              <ItemCard lang={lang} {...project} type='projects' />
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default Home;
