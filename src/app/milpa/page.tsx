import { getContent } from '@/utils/getContent';
import Mdx from '@/components/mdx-component';
import MilpaThought from '@/components/milpa-thought';
import { supabase } from '@/supabase/client';
import { Metadata } from 'next';

export const revalidate = 0;

export const metadata: Metadata = {
  title: 'Milpa',
  description: 'A place to grow my thoughts.',
};

export default async function MilpaPage() {
  const milpa = await getContent('milpa', 'content');
  const { data } = await supabase
    .from('milpa')
    .select('*')
    .order('created_at', { ascending: false });

  if (!milpa) return null;

  return (
    <>
      <Mdx code={milpa.body.code} />

      <div className='mt-20 max-w-[65ch] mx-auto flex flex-col gap-10'>
        {data ? (
          data.map((milpa) => <MilpaThought key={milpa.id} {...milpa} />)
        ) : (
          <p>Not found</p>
        )}
      </div>
    </>
  );
}
