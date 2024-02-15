import ItemCard from '@/components/item-card';
import { getAllContent } from '@/utils/getContent';
import { sortByKeyDesc } from '@/utils/sorts';
import type { Metadata } from 'next';
import { TParamsLocale, TPage } from '@/types';
import { getTranslations } from 'next-intl/server';

export async function generateMetadata(props: TPage): Promise<Metadata> {
  const t = await getTranslations({
    locale: props.params.locale,
  });

  return {
    title: t('metadata.home.title'),
    description: t('metadata.home.description'),
  };
}

export default async function Page(props: TParamsLocale) {
  const t = await getTranslations({
    locale: props.params.locale,
  });

  const blogs = await getAllContent(props.params.locale, 'blog');

  sortByKeyDesc(blogs!, 'date');
  const last3Blogs = blogs && blogs.slice(0, 3);

  const projects = await getAllContent(props.params.locale, 'portfolio');
  sortByKeyDesc(projects!, 'date');
  const last3Projects = projects && projects.slice(0, 3);

  return (
    <div className="flex flex-col gap-20">
      <section className="flex flex-col gap-1">
        <h2 className="text-4xl">{t('home.hello_iam')} Juan Manzanero</h2>
        <h1 className="text-primary text-4xl font-bold">
          Full Stack Developer
        </h1>
        <p className="text-lg">{t('home.my_web_1')}</p>
        <p className="text-lg">{t('home.my_web_2')}</p>
      </section>

      <section>
        <h2 className="text-3xl text-primary">{t('home.latest_posts')}</h2>
        <ul className="max-w-max mt-8 flex flex-col lg:flex-row gap-6">
          {last3Blogs &&
            last3Blogs.map((blog) => (
              <li key={blog.slug}>
                <ItemCard {...blog} lang={props.params.locale} type="blog" />
              </li>
            ))}
        </ul>
      </section>

      <section>
        <h2 className="text-3xl text-primary">{t('home.latest_projects')}</h2>
        <ul className="max-w-max mt-8 flex flex-col lg:flex-row gap-6">
          {last3Projects && last3Projects.length > 0 ? (
            last3Projects.map((project) => (
              <li key={project.slug}>
                <ItemCard
                  {...project}
                  lang={props.params.locale}
                  type="portfolio"
                />
              </li>
            ))
          ) : (
            <p className="font-thin">{t('home.no_projects')}</p>
          )}
        </ul>
      </section>
    </div>
  );
}
