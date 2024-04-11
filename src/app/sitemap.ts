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
      priority: 0.9,
    },
    {
      url: 'https://juancman.dev/portfolio',
      changeFrequency: 'monthly',
      priority: 0.9,
    },

    {
      url: 'https://juancman.dev/microblog',
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://juancman.dev/resources',
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: 'https://juancman.dev/about',
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: 'https://juancman.dev/contact',
      changeFrequency: 'monthly',
      priority: 0.6,
    },
  ];
}
