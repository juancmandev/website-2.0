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

export const generateStaticParams = async () => {
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
      <header className='mb-[40px] text-center max-w-[65ch] mx-auto flex flex-col gap-[8px]'>
        <figure className='w-full'>
          <Image
            style={{
              objectFit: 'contain',
              position: 'relative',
              minWidth: '100%',
            }}
            width={300}
            height={100}
            src={post.data.featuredImage}
            alt={`${post.data.title} image`}
          />
          <figcaption className='text-sm font-light'>
            {post.data.featuredImageCaption}
          </figcaption>
        </figure>

        <h1 className='text-4xl font-bold'>{post.data.title}</h1>
        <p className='text-md font-light'>
          {new Date(post.data.date).toLocaleDateString('en-US')}
        </p>
      </header>

      <article className='prose prose-invert mx-auto'>
        <Markdown>{post.content}</Markdown>
      </article>
    </>
  );
};

export default PostPage;
