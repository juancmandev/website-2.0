import { getContent } from '@/utils/get-content';
import Mdx from '@/components/mdx-component';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Resources',
  description:
    'Here you can find websites, YouTube channels, courses and more stuff that I consume or find interesting.',
};

export default async function Page() {
  const resource = await getContent('resources', 'content');

  if (!resource) return null;

  return (
    <article className='prose prose-invert mx-auto'>
      <Mdx code={resource.body.code} />
    </article>
  );
}
