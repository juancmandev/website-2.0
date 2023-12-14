import fs from 'fs';
import RSS from 'rss';
import path from 'path';
import { marked } from 'marked';
import matter from 'gray-matter';
import { TContent } from '@/types';

const url = 'https://juancman.dev';

const blogs = fs
  .readdirSync(path.resolve(__dirname, '../content/en/blog/'))
  .filter((file) => path.extname(file) === '.mdx')
  .map((file) => {
    const postContent = fs.readFileSync(`src/content/en/blog/${file}`, 'utf8');
    const { data, content }: { data: any; content: string } =
      matter(postContent);
    const slug = file.replace('.mdx', '');

    return { ...(data as TContent), body: content, slug };
  })
  .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

const projects = fs
  .readdirSync(path.resolve(__dirname, '../content/en/projects/'))
  .filter((file) => path.extname(file) === '.mdx')
  .map((file) => {
    const projectContent = fs.readFileSync(
      `src/content/es/projects/${file}`,
      'utf8'
    );
    const { data, content }: { data: any; content: string } =
      matter(projectContent);
    const slug = file.replace('.mdx', '');

    return { ...(data as TContent), body: content, slug };
  })
  .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

const renderer = new marked.Renderer();

renderer.link = (href, _, text) =>
  `<a href="${href}" target="_blank" rel="noopener noreferrer">${text}</a>`;

marked.setOptions({
  gfm: true,
  breaks: true,
  renderer,
});

const renderContent = (md: string) => marked.parse(md);

const main = () => {
  const feed = new RSS({
    title: 'Juan Manzanero in English',
    site_url: `${url}/en`,
    feed_url: `${url}/en-feed.xml`,
    language: 'en',
    description: "Juan Manzanero's blog",
  });

  blogs.forEach((blog) => {
    const link = `${url}/en/blog/${blog.slug}`;

    feed.item({
      title: blog.title,
      description: renderContent(blog.body),
      date: new Date(blog.date),
      author: blog.author,
      url: link,
      guid: link,
      categories: blog.tags,
    });
  });

  projects.forEach((project) => {
    const link = `${url}/en/projects/${project.slug}`;

    feed.item({
      title: project.title,
      description: renderContent(project.body),
      date: new Date(project.date),
      author: project.author,
      url: link,
      guid: link,
      categories: project.tags,
    });
  });

  const rss = feed.xml({ indent: true });

  fs.writeFileSync(path.join(__dirname, '../../public/en-feed.xml'), rss);
};

main();
