import { getContent } from '@/utils/get-content';
import Mdx from '@/components/mdx-component';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About',
  description: 'Why I created this website.',
};

export default async function About() {
  const about = await getContent('about', 'content');

  if (!about) return null;

  return (
    <article className='prose prose-invert mx-auto'>
      <Mdx code={about.body.code} />
    </article>
  );
}
