import { getContent } from '@/utils/get-content';
import Mdx from '@/components/mdx-component';

export default async function Contact() {
  const contact = await getContent('contact', 'content');

  if (!contact) return null;

  return <Mdx code={contact.body.code} />;
}
