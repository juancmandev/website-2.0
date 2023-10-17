import { PageProps } from '@/interfaces/ContentPage.model';
import { getResource } from '@/utils/getContent';
import { Mdx } from '@/components/MdxComponent';
import { Metadata } from 'next';

export async function generateMetadata(props: PageProps): Promise<Metadata> {
  const resource = await getResource(props.params.lang);

  return {
    title: resource.title,
    description: resource.description,
  };
}

export default async function Page({ params }: PageProps) {
  const resource = await getResource(params.lang);

  return <Mdx code={resource.body.code} />;
}
