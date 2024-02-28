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
  const microblogging = await getContent('microblog', 'content');
  const pb = createServerClient();
  const data = await pb.collection('microblogs').getFullList({
    expand: 'tags',
    sort: '-published',
  });

  if (!microblogging) return null;

  return (
    <>
      <Mdx code={microblogging.body.code} />

      <div className='mt-10 max-w-[65ch] mx-auto flex flex-col gap-10'>
        {data ? (
          data.map((item) => (
            <Microblog
              key={item.id}
              {...item}
              expand={{
                ...(item.expand as any),
              }}
            />
          ))
        ) : (
          <p>Not found</p>
        )}
      </div>
    </>
  );
}
