import fs from 'fs';
import RSS from 'rss';
import path from 'path';
import { marked } from 'marked';
import matter from 'gray-matter';

const url = 'https://juancman.dev';

const blogs = fs
  .readdirSync(path.resolve(__dirname, '../../content/blog/'))
  .filter((file) => path.extname(file) === '.mdx')
  .map((file) => {
    const postContent = fs.readFileSync(`content/blog/${file}`, 'utf8');
    const { data, content }: { data: any; content: string } =
      matter(postContent);
    const slug = file.replace('.mdx', '');

    return { ...data, body: content, slug };
  })
  .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

const portfolio = fs
  .readdirSync(path.resolve(__dirname, '../../content/portfolio/'))
  .filter((file) => path.extname(file) === '.mdx')
  .map((file) => {
    const projectContent = fs.readFileSync(
      `src/content/es/portfolio/${file}`,
      'utf8'
    );
    const { data, content }: { data: any; content: string } =
      matter(projectContent);
    const slug = file.replace('.mdx', '');

    return { ...data, body: content, slug };
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
    title: 'juancmandev',
    site_url: `${url}`,
    feed_url: `${url}/feed.xml`,
    language: 'en',
    description: "Welcome to juancmandev's website",
    image_url: `${url}/logo.png`,
  });

  blogs.forEach((blog) => {
    const link = `${url}/blog/${blog.slug}`;

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
    const link = `${url}/portfolio/${portfolioProject.slug}`;

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

  fs.writeFileSync(path.join(__dirname, '../../public/feed.xml'), rss);
};

main();
