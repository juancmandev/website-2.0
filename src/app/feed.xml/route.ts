import showdown from 'showdown';
import RSS from 'rss';
import {
  getProjectEnMetadata,
  getProjectsEsMetadata,
} from '@/utils/getProjectMetadata';
import { getPostEnMetadata, getPostEsMetadata } from '@/utils/getPostMetadata';

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

  enProjects.forEach((enProject) => {
    const converter = new showdown.Converter();
    const html = converter.makeHtml(enProject.content || '');

    feed.item({
      title: enProject.title,
      description: html,
      url: `https://www.juancman.dev/en/projects/${enProject.slug}`,
      date: new Date(enProject.date),
      categories: enProject.tags,
    });
  });

  esProjects.forEach((esProject) => {
    const converter = new showdown.Converter();
    const html = converter.makeHtml(esProject.content || '');

    feed.item({
      title: esProject.title,
      description: html,
      url: `https://www.juancman.dev/es/projects/${esProject.slug}`,
      date: new Date(esProject.date),
      categories: esProject.tags,
    });
  });

  enPosts.forEach((enPost) => {
    const converter = new showdown.Converter();
    const html = converter.makeHtml(enPost.content || '');

    feed.item({
      title: enPost.title,
      description: html,
      url: `https://www.juancman.dev/en/blog/${enPost.slug}`,
      date: new Date(enPost.date),
      categories: enPost.tags,
    });
  });

  esPosts.forEach((esPost) => {
    const converter = new showdown.Converter();
    const html = converter.makeHtml(esPost.content || '');

    feed.item({
      title: esPost.title,
      description: html,
      url: `https://www.juancman.dev/es/blog/${esPost.slug}`,
      date: new Date(esPost.date),
      categories: esPost.tags,
    });
  });

  return new Response(feed.xml({ indent: true }), {
    headers: {
      'Content-Type': 'application/atom+xml; charset=UTF-8',
    },
  });
}
