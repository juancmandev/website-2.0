import RSS from 'rss';
import { getPostEnMetadata, getPostEsMetadata } from '@/utils/getPostMetadata';
import {
  getProjectEnMetadata,
  getProjectsEsMetadata,
} from '@/utils/getProjectMetadata';

export async function GET() {
  const enProjects = getProjectEnMetadata();
  const esProjects = getProjectsEsMetadata();
  const enPosts = getPostEnMetadata();
  const esPosts = getPostEsMetadata();

  const feed = new RSS({
    title: 'juancmandev',
    description: 'Juan Manzanero, Frontend Developer',
    site_url: 'https://www.juancman.dev',
    feed_url: 'https://www.juancman.dev/feed.xml',
    pubDate: new Date(),
  });

  enProjects.forEach((project) => {
    feed.item({
      title: project.title,
      description: project.subtitle,
      url: `https://www.juancman.dev/en/projects/${project.slug}`,
      date: new Date(project.date),
      categories: project.tags,
    });
  });

  esProjects.forEach((project) => {
    feed.item({
      title: project.title,
      description: project.subtitle,
      url: `https://www.juancman.dev/es/projects/${project.slug}`,
      date: new Date(project.date),
      categories: project.tags,
    });
  });

  enPosts.forEach((post) => {
    feed.item({
      title: post.title,
      description: post.subtitle,
      url: `https://www.juancman.dev/en/blog/${post.slug}`,
      date: new Date(post.date),
      categories: post.tags,
    });
  });

  esPosts.forEach((post) => {
    feed.item({
      title: post.title,
      description: post.subtitle,
      url: `https://www.juancman.dev/es/blog/${post.slug}`,
      date: new Date(post.date),
      categories: post.tags,
    });
  });

  return new Response(feed.xml(), {
    headers: {
      'Content-Type': 'application/atom+xml; charset=UTF-8',
    },
  });
}
