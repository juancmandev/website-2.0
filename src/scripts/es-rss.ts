import fs from 'fs';
import RSS from 'rss';
import path from 'path';
import { marked } from 'marked';
import matter from 'gray-matter';

const url = 'https://juancman.dev';

const blogs = fs
  .readdirSync(path.resolve(__dirname, '../content/blog/es/'))
  .filter((file) => path.extname(file) === '.mdx')
  .map((file) => {
    const postContent = fs.readFileSync(`src/content/blog/es/${file}`, 'utf8');
    const { data, content }: { data: any; content: string } = matter(
      postContent
    );
    return { ...data, body: content };
  })
  .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

const projects = fs
  .readdirSync(path.resolve(__dirname, '../content/projects/es/'))
  .filter((file) => path.extname(file) === '.mdx')
  .map((file) => {
    const projectContent = fs.readFileSync(
      `src/content/projects/es/${file}`,
      'utf8'
    );
    const { data, content }: { data: any; content: string } = matter(
      projectContent
    );
    return { ...data, body: content };
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
    title: 'Juan Manzanero en Español',
    site_url: `${url}/es`,
    feed_url: `${url}/es-feed.xml`,
    language: 'es',
    description: 'Blog de Juan Manzanero',
  });

  blogs.forEach((blog) => {
    const link = `${url}/es/blog/${blog.slug}`;

    feed.item({
      title: blog.title,
      description: renderContent(blog.body),
      date: new Date(blog?.date),
      author: 'Juan Manzanero',
      url: link,
      guid: link,
      categories: [blog.tags],
    });
  });

  projects.forEach((project) => {
    const link = `${url}/es/projects/${project.slug}`;

    feed.item({
      title: project.title,
      description: renderContent(project.body),
      date: new Date(project?.date),
      author: 'Juan Manzanero',
      url: link,
      guid: link,
      categories: [project.tags],
    });
  });

  const rss = feed.xml({ indent: true });

  fs.writeFileSync(path.join(__dirname, '../../public/es-feed.xml'), rss);
};

main();
