import { MetadataRoute } from 'next';
import { getBlogsFromParams, getProjectsFromParams } from '@/utils/getContent';

const url = 'https://juancman.dev/';
const lang = 'es';

export default function sitemap(): MetadataRoute.Sitemap {
  const content: {
    url: string;
    lastModified: string | Date;
    changeFrequency?:
      | 'always'
      | 'hourly'
      | 'daily'
      | 'weekly'
      | 'monthly'
      | 'yearly'
      | 'never'
      | undefined;
  }[] = [
    {
      url: `${url}/${lang}/`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
    },
  ];

  getBlogsFromParams(lang).then((blogs) => {
    blogs.forEach((blog) => {
      content.push({
        url: `${url}/${lang}/blog/${blog.slug}`,
        lastModified: blog.date,
      });
    });
  });

  getProjectsFromParams(lang).then((projects) => {
    projects.forEach((project) => {
      content.push({
        url: `${url}/${lang}/projects/${project.slug}`,
        lastModified: project.date,
      });
    });
  });

  return content;
}
