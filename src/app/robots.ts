import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: 'Googlebot',
        allow: ['/'],
      },
      {
        userAgent: ['GPTBot', 'GPTBot-User', 'ChatGPT', 'ChatGPT-User'],
        disallow: ['/'],
      },
    ],
    sitemap: ' https://juancman.dev/sitemap.xml',
  };
}
