import { TParamsLocale } from '@/types';
import { getContent } from '@/utils/getContent';
import { Mdx } from '@/components';
import { Metadata } from 'next';

export async function generateMetadata(
  props: TParamsLocale
): Promise<Metadata> {
  const resource = await getContent(
    props.params.locale,
    'resources',
    'content'
  );

  if (!resource) return {};

  return {
    title: resource.title,
    description: resource.description,
  };
}

export default async function Page(props: TParamsLocale) {
  const resource = await getContent(
    props.params.locale,
    'resources',
    'content'
  );

  if (!resource) return null;

  return <Mdx code={resource.body.code} />;
}
