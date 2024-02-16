import { getContent } from '@/utils/getContent';
import Mdx from '@/components/mdx-component';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Resources',
  description: 'Content I consume for inspiration and entertainment.',
};

export default async function Page() {
  const resource = await getContent('resources', 'content');
  console.log(resource);

  if (!resource) return null;

  return <Mdx code={resource.body.code} />;
}
