import {
  allEnPosts,
  allEsPosts,
  allEnProjects,
  allEsProjects,
} from 'contentlayer/generated';
import { notFound } from 'next/navigation';
import { Locale } from '@/dictionaries/i18n-config';

export async function getBlogFromParams(slug: string, lang: Locale) {
  const blog =
    lang === 'en'
      ? allEnPosts.find((p) => p.slug === slug)
      : allEsPosts.find((p) => p.slug === slug);

  if (!blog) notFound();

  return blog;
}

export async function getBlogsFromParams(lang: Locale) {
  const blog = lang === 'en' ? allEnPosts : allEsPosts;

  if (!blog) notFound();

  return blog;
}

export async function getProjectsFromParams(lang: Locale) {
  const blog = lang === 'en' ? allEnProjects : allEsProjects;

  if (!blog) notFound();

  return blog;
}

export async function getProjectFromParams(slug: string, lang: Locale) {
  const project =
    lang === 'en'
      ? allEnProjects.find((p) => p.slug === slug)
      : allEsProjects.find((p) => p.slug === slug);

  if (!project) notFound();

  return project;
}
