import { PageProps } from '@/interfaces/ContentPage.model';
import { getMilpa } from '@/utils/getContent';
import { Mdx } from '@/components/MdxComponent';
import { supabase } from '@/supabase/client';
import MilpaThought from '@/components/MilpaThought';

export const revalidate = 0;

export default async function MilpaPage({ params }: PageProps) {
  const milpa = await getMilpa(params.lang);
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
            <MilpaThought key={milpa.id} {...milpa} pageLang={params.lang} />
          ))
        ) : (
          <p>Not found</p>
        )}
      </div>
    </>
  );
}
