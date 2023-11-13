import { LangProps } from '@/interfaces';
import { getMilpa } from '@/utils/getContent';
import { Mdx, MilpaThought } from '@/components';
import { supabase } from '@/supabase/client';
import { Metadata } from 'next';

export const revalidate = 0;

export async function generateMetadata(props: LangProps): Promise<Metadata> {
  const milpa = await getMilpa(props.params.lang);

  return {
    title: milpa.title,
    description: milpa.description,
  };
}

export default async function MilpaPage(props: LangProps) {
  const milpa = await getMilpa(props.params.lang);
  const { data } = await supabase
    .from('milpa')
    .select('*')
    .order('created_at', { ascending: false });

  return (
    <>
      <Mdx code={milpa.body.code} />

      <div className='mt-20 max-w-[65ch] mx-auto flex flex-col gap-10'>
        {data ? (
          data.map((milpa) => (
            <MilpaThought
              key={milpa.id}
              {...milpa}
              pageLang={props.params.lang}
            />
          ))
        ) : (
          <p>Not found</p>
        )}
      </div>
    </>
  );
}
