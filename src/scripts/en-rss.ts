import fs from 'fs';
import RSS from 'rss';
import path from 'path';
import { fileURLToPath } from 'url';
import { marked } from 'marked';
import matter from 'gray-matter';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const url = 'https://juancman.dev';

const blogs = fs
  .readdirSync(path.resolve(__dirname, '../content/blog/en/'))
  .filter((file) => path.extname(file) === '.mdx')
  .map((file) => {
    const postContent = fs.readFileSync(`src/content/blog/en/${file}`, 'utf8');
    const { data, content }: { data: any; content: string } = matter(
      postContent
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
    title: 'juancmandev',
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
      date: new Date(blog?.date),
      author: 'Juan Manzanero',
      url: link,
      guid: link,
    });
  });

  const rss = feed.xml({ indent: true });

  fs.writeFileSync(path.join(__dirname, '../../public/en-feed.xml'), rss);
};

main();
