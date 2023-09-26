import { PageProps } from '@/interfaces/ContentPage.model';
import { getResource } from '@/utils/getContent';
import { Mdx } from '@/components/MdxComponent';

export default async function Page({ params }: PageProps) {
  const resource = await getResource(params.lang);

  return <Mdx code={resource.body.code} />;
}
