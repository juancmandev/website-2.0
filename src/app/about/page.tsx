import { getContent } from '@/utils/get-content';
import Mdx from '@/components/mdx-component';

export default async function About() {
  const contact = await getContent('about', 'content');

  if (!contact) return null;

  return <Mdx code={contact.body.code} />;
}
