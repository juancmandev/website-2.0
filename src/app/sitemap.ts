import { MetadataRoute } from 'next';
import { getPostEnMetadata, getPostEsMetadata } from '@/utils/getPostMetadata';
import {
  getProjectEnMetadata,
  getProjectsEsMetadata,
} from '@/utils/getProjectMetadata';

export default function sitemap(): MetadataRoute.Sitemap {
  const enProjects = getProjectEnMetadata();
  const esProjects = getProjectsEsMetadata();
  const enPosts = getPostEnMetadata();
  const esPosts = getPostEsMetadata();

  return [
    {
      url: 'https://www.juancman.dev/en',
      lastModified: new Date(),
    },
    {
      url: 'https://www.juancman.dev/es',
      lastModified: new Date(),
    },
    ...enProjects.map((project) => ({
      url: `https://www.juancman.dev/en/projects/${project.slug}`,
      lastModified: new Date(project.date),
    })),
    ...esProjects.map((project) => ({
      url: `https://www.juancman.dev/es/projects/${project.slug}`,
      lastModified: new Date(project.date),
    })),
    ...enPosts.map((post) => ({
      url: `https://www.juancman.dev/en/blog/${post.slug}`,
      lastModified: new Date(post.date),
    })),
    ...esPosts.map((post) => ({
      url: `https://www.juancman.dev/es/blog/${post.slug}`,
      lastModified: new Date(post.date),
    })),
  ];
}
