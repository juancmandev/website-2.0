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

const portfolio = fs
  .readdirSync(path.resolve(__dirname, '../content/en/portfolio/'))
  .filter((file) => path.extname(file) === '.mdx')
  .map((file) => {
    const projectContent = fs.readFileSync(
      `src/content/es/portfolio/${file}`,
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
    image_url: `${url}/logo.png`,
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

  portfolio.forEach((portfolioProject) => {
    const link = `${url}/en/portfolio/${portfolioProject.slug}`;

    feed.item({
      title: portfolioProject.title,
      description: renderContent(portfolioProject.body),
      date: new Date(portfolioProject.date),
      author: portfolioProject.author,
      url: link,
      guid: link,
      categories: portfolioProject.tags,
    });
  });

  const rss = feed.xml({ indent: true });

  fs.writeFileSync(path.join(__dirname, '../../public/en-feed.xml'), rss);
};

main();
