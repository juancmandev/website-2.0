import { getBlogsFromParams, getProjectsFromParams } from '@/utils/getContent';
import RSS from 'rss';

const url = 'https://juancman.dev';
const lang = 'en';

export async function GET() {
  const blogs = await getBlogsFromParams('en');
  const projects = await getProjectsFromParams('en');

  const feed = new RSS({
    title: 'Juan Manzanero in English',
    description:
      'This is my website, a place in the Internet that I can call my home.',
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
      description: `${blog.subtitle} <br /> <br /> <a target="_blank" href="${url}/${lang}/blog/${blog.slug}">Keep reading</a>`,
      url: `${url}/${lang}/blog/${blog.slug}`,
      guid: `${url}/${lang}/blog/${blog.slug}`,
      date: blog.date,
      categories: [blog.tags],
    });
  });

  projects.forEach((project) => {
    feed.item({
      title: project.title,
      description: `${project.subtitle} <br /> <br /> <a target="_blank" href="${url}/${lang}/projects/${project.slug}">Keep reading</a>`,
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
