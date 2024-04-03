import { getContent } from '@/utils/get-content';
import Mdx from '@/components/mdx-component';
import Microblog from '@/components/microblog';
import { Metadata } from 'next';
import { createServerClient } from '@/lib/pocketbase';

export const revalidate = 0;

export const metadata: Metadata = {
  title: 'Microblogging',
  description: 'Short-format writing.',
};

export default async function MicroblogPage() {
  const microblogContent = await getContent('microblog', 'content');
  const pb = createServerClient();
  const data = await pb.collection('microblogs').getFullList({
    expand: 'tags',
    sort: '-published',
  });

  if (!microblogContent) return null;

  return (
    <>
      <div className='prose prose-invert mx-auto'>
        <Mdx code={microblogContent.body.code} />
      </div>
      {data ? (
        <ul className='mx-auto mt-10 flex max-w-[65ch] flex-col gap-10'>
          {data.map((item) => (
            <li key={item.id}>
              <Microblog
                {...item}
                expand={{
                  ...(item.expand as any),
                }}
              />
            </li>
          ))}
        </ul>
      ) : (
        <p>Not found</p>
      )}
    </>
  );
}
