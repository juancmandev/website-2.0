import { getContent } from '@/utils/getContent';
import Mdx from '@/components/mdx-component';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'juancmandev | Resources',
  description:
    'Here you can find websites, YouTube channels, courses and more stuff that I consume or find interesting.',
};

export default async function Page() {
  const resource = await getContent('resources', 'content');

  if (!resource) return null;

  return <Mdx code={resource.body.code} />;
}