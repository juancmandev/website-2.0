import fs from 'fs';
import matter from 'gray-matter';
import ItemCardMetadataProps from '@/interfaces/ItemCardMetadata.model';
import { sortByKeyDesc } from './sorts';

export const getProjectEnMetadata = (): ItemCardMetadataProps[] => {
  const files = fs.readdirSync(`src/projects/en/`);
  const markdownProjects = files.filter((file) => file.endsWith('.md'));

  const projects = markdownProjects.map((fileName) => {
    const fileContents = fs.readFileSync(`src/projects/en/${fileName}`, 'utf8');
    const matterResults = matter(fileContents);

    return {
      title: matterResults.data.title,
      date: new Date(matterResults.data.date),
      subtitle: matterResults.data.subtitle,
      slug: fileName.replace('.md', ''),
      tags: matterResults.data.tags,
      featuredImage: matterResults.data.featuredImage,
      featuredImageCaption: matterResults.data.featuredImageCaption,
      repo: matterResults.data.repo,
      url: matterResults.data.url,
      author: matterResults.data.author,
    };
  });

  sortByKeyDesc(projects, 'date');

  return projects;
};

export const getProjectsEsMetadata = (): ItemCardMetadataProps[] => {
  const files = fs.readdirSync(`src/projects/es/`);
  const markdownProjects = files.filter((file) => file.endsWith('.md'));

  const projects = markdownProjects.map((fileName) => {
    const fileContents = fs.readFileSync(`src/projects/es/${fileName}`, 'utf8');
    const matterResults = matter(fileContents);

    return {
      title: matterResults.data.title,
      date: new Date(matterResults.data.date),
      subtitle: matterResults.data.subtitle,
      slug: fileName.replace('.md', ''),
      tags: matterResults.data.tags,
      featuredImage: matterResults.data.featuredImage,
      featuredImageCaption: matterResults.data.featuredImageCaption,
      repo: matterResults.data.repo,
      url: matterResults.data.url,
      author: matterResults.data.author,
    };
  });

  sortByKeyDesc(projects, 'date');

  return projects;
};
