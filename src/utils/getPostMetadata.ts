import fs from 'fs';
import matter from 'gray-matter';
import PostMetadataProps from '@/interfaces/PostMetadata.model';
import { sortByKeyDesc } from './sorts';

const getPostMetadata = (): PostMetadataProps[] => {
  const files = fs.readdirSync('src/posts');
  const markdownPosts = files.filter((file) => file.endsWith('.md'));

  const posts = markdownPosts.map((fileName) => {
    const fileContents = fs.readFileSync(`src/posts/${fileName}`, 'utf8');
    const matterResults = matter(fileContents);

    return {
      title: matterResults.data.title,
      date: new Date(matterResults.data.date),
      subtitle: matterResults.data.subtitle,
      slug: fileName.replace('.md', ''),
      tags: matterResults.data.tags,
      featuredImage: matterResults.data.featuredImage,
      featuredImageCaption: matterResults.data.featuredImageCaption,
    };
  });

  sortByKeyDesc(posts, 'date');

  return posts;
};

export default getPostMetadata;
