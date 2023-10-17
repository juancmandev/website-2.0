import {
  allEnPosts,
  allEsPosts,
  allEnProjects,
  allEsProjects,
  allEnResources,
  allEsResources,
  allEnMilpas,
  allEsMilpas,
  allEnMains,
  allEsMains,
  allEnBlogMains,
  allEsBlogMains,
  allEnProjectsMains,
  allEsProjectsMains
} from 'contentlayer/generated';
import { notFound } from 'next/navigation';
import { Locale } from '@/dictionaries/i18n-config';

export async function getMainPage(lang: Locale) {
  const main = lang === 'en' ? allEnMains : allEsMains;

  if (!main) notFound();

  return main[0]
}

export async function getBlogData(lang: Locale) {
  const blogPage = lang === 'en' ? allEnBlogMains : allEsBlogMains;

  if (!blogPage) notFound();

  return blogPage[0];
}

export async function getProjectsData(lang: Locale) {
  const projectPage = lang === 'en' ? allEnProjectsMains : allEsProjectsMains;

  if (!projectPage) notFound();

  return projectPage[0];
}

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

export async function getResource(lang: Locale) {
  const resource = lang === 'en' ? allEnResources : allEsResources;

  if (!resource) notFound();

  return resource[0];
}

export async function getMilpa(lang: Locale) {
  const milpa = lang === 'en' ? allEnMilpas : allEsMilpas;

  if (!milpa) notFound();

  return milpa[0];
}