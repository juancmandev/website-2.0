import fs from 'fs';
import Markdown from 'markdown-to-jsx';
import matter from 'gray-matter';
import getPostMetadata from '@/utils/getPostMetadata';
import Image from 'next/image';

const getPostContent = (slug: string) => {
  const file = `src/posts/${slug}.md`;
  const content = fs.readFileSync(file, 'utf8');
  const matterResult = matter(content);

  return matterResult;
};

export const getStaticParams = async () => {
  const posts = getPostMetadata();

  return posts.map((post) => ({
    slug: post.slug,
  }));
};

const PostPage = ({ params }: { params: { slug: string } }) => {
  const { slug } = params;
  const post = getPostContent(slug);

  return (
    <>
      <header className='my-12 text-center'>
        <h1 className='text-2xl text-slate-600'>{post.data.title}</h1>
        <p className='text-slate-400 mt-2'>{post.data.date}</p>
        <figure>
          <Image
            src={post.data.featuredImage}
            width={500}
            height={300}
            alt={`${post.data.title} image`}
          />
          <figcaption>{post.data.title} image</figcaption>
        </figure>
      </header>

      <article className='prose prose-invert'>
        <Markdown>{post.content}</Markdown>
      </article>
    </>
  );
};

export default PostPage;
