import BlogCard from '@/components/BlogCard';
import { getPostEnMetadata, getPostEsMetadata } from '@/utils/getPostMetadata';
import { getDictionary } from '@/utils/getDictionary';
import { Locale } from '../../../i18n-config';

const Home = async ({ params: { lang } }: { params: { lang: Locale } }) => {
  const dictionary = await getDictionary(lang);
  const postMetadata =
    lang === 'en' ? getPostEnMetadata() : getPostEsMetadata();
  const last3Posts = postMetadata.slice(0, 3);

  return (
    <div className='grid gap-y-[200px]'>
      <section className='grid gap-y-[4px]'>
        <h2 className='text-3xl'>{`Hi, I'm Juan`}</h2>
        <h1 className='text-4xl text-primary'>Frontend Engineer</h1>
        <p className='font-thin text-lg'>
          This is my web site, here I share my career as a{' '}
          <span className='font-normal text-primary'>Frontend</span> and{' '}
          <span className='font-normal text-primary'>Cloud</span> engineer.
        </p>
      </section>

      <section>
        <h2 className='text-3xl text-primary'>Latest Posts</h2>
        <p className='font-thin text-lg'>
          The best way to demostrate that you learnt something, is sharing it.
        </p>
        <p className='font-thin text-lg'>
          {`Here're my latest posts, feel free to read, I'll be happy if you found something that could help you in your career.`}
        </p>
        <ul className='mt-[32px] flex flex-col lg:flex-row gap-[12px] '>
          {last3Posts.map((post) => (
            <li key={post.slug}>
              <BlogCard lang={lang} {...post} />
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default Home;
