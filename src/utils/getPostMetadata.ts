import fs from 'fs';
import matter from 'gray-matter';
import PostMetadataProps from '@/interfaces/ItemCardMetadata.model';
import { sortByKeyDesc } from './sorts';

export const getPostEnMetadata = (): PostMetadataProps[] => {
  const files = fs.readdirSync(`src/posts/en/`);
  const markdownPosts = files.filter((file) => file.endsWith('.md'));

  const posts = markdownPosts.map((fileName) => {
    const fileContents = fs.readFileSync(`src/posts/en/${fileName}`, 'utf8');
    const matterResults = matter(fileContents);

    return {
      title: matterResults.data.title,
      date: new Date(matterResults.data.date),
      subtitle: matterResults.data.subtitle,
      slug: fileName.replace('.md', ''),
      tags: matterResults.data.tags,
      featuredImage: matterResults.data.featuredImage,
      featuredImageCaption: matterResults.data.featuredImageCaption,
      author: matterResults.data.author,
      lang: 'en',
    };
  });

  sortByKeyDesc(posts, 'date');

  return posts;
};

export const getPostEsMetadata = (): PostMetadataProps[] => {
  const files = fs.readdirSync(`src/posts/es/`);
  const markdownPosts = files.filter((file) => file.endsWith('.md'));

  const posts = markdownPosts.map((fileName) => {
    const fileContents = fs.readFileSync(`src/posts/es/${fileName}`, 'utf8');
    const matterResults = matter(fileContents);

    return {
      title: matterResults.data.title,
      date: new Date(matterResults.data.date),
      subtitle: matterResults.data.subtitle,
      slug: fileName.replace('.md', ''),
      tags: matterResults.data.tags,
      featuredImage: matterResults.data.featuredImage,
      featuredImageCaption: matterResults.data.featuredImageCaption,
      author: matterResults.data.author,
      lang: 'es',
    };
  });

  sortByKeyDesc(posts, 'date');

  return posts;
};
