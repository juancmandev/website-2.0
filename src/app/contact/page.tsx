import { getContent } from '@/utils/get-content';
import Mdx from '@/components/mdx-component';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Say hi or hire me.',
};

export default async function Contact() {
  const contact = await getContent('contact', 'content');

  if (!contact) return null;

  return <Mdx code={contact.body.code} />;
}
