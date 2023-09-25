import { getBlogsFromParams, getProjectsFromParams } from '@/utils/getContent';
import RSS from 'rss';

const url = 'https://juancman.dev';
const lang = 'es';

export async function GET() {
  const blogs = await getBlogsFromParams(lang);
  const projects = await getProjectsFromParams(lang);

  const feed = new RSS({
    title: 'Juan Manzanero en Español',
    description:
      'Este es mi website, un lugar de la Internet al que puedo llamar hogar.',
    site_url: `${url}/${lang}`,
    feed_url: `${url}/${lang}/feed.xml`,
    copyright: 'Uncopyrighted by Juan Manzanero.',
    language: lang,
    pubDate: new Date(),
    image_url: `${url}/favicon.ico`,
  });

  blogs.forEach((blog) => {
    feed.item({
      title: blog.title,
      description: `${blog.subtitle} <br /> <br /> <a target="_blank" href="${url}/${lang}/blog/${blog.slug}">Continua leyendo</a>`,
      url: `${url}/${lang}/blog/${blog.slug}`,
      guid: `${url}/${lang}/blog/${blog.slug}`,
      date: blog.date,
      categories: [blog.tags],
    });
  });

  projects.forEach((project) => {
    feed.item({
      title: project.title,
      description: `${project.subtitle} <br /> <br /> <a target="_blank" href="${url}/${lang}/projects/${project.slug}">Continua leyendo</a>`,
      url: `${url}/${lang}/projects/${project.slug}`,
      guid: `${url}/${lang}/projects/${project.slug}`,
      date: project.date,
      categories: [project.tags],
    });
  });

  return new Response(feed.xml(), {
    headers: {
      'content-type': 'application/atom+xml;charset=UTF-8',
    },
  });
}
