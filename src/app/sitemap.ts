import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://juancman.dev',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: 'https://juancman.dev/blog',
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://juancman.dev/portfolio',
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://juancman.dev/about',
      changeFrequency: 'yearly',
      priority: 0.6,
    },
    {
      url: 'https://juancman.dev/resources',
      changeFrequency: 'yearly',
      priority: 0.6,
    },
    {
      url: 'https://juancman.dev/microblog',
      changeFrequency: 'weekly',
      priority: 0.6,
    },
    {
      url: 'https://juancman.dev/contact',
      changeFrequency: 'yearly',
      priority: 0.6,
    },
  ];
}
