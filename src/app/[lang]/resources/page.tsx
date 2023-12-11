import { TParamsLang } from '@/types';
import { getResource } from '@/utils/getContent';
import { Mdx } from '@/components';
import { Metadata } from 'next';

export async function generateMetadata(props: TParamsLang): Promise<Metadata> {
  const resource = await getResource(props.params.lang);

  return {
    title: resource.title,
    description: resource.description,
  };
}

export default async function Page(props: TParamsLang) {
  const resource = await getResource(props.params.lang);

  return <Mdx code={resource.body.code} />;
}
