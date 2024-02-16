import { allContents } from 'contentlayer/generated';

export async function getAllContent(type: string) {
  const content = allContents.filter((c: any) =>
    new RegExp(`${type}/*`).test(c._id)
  );

  if (!content) return;

  return content;
}

export async function getContent(type: string, slug: string) {
  const content = allContents.find((c: any) =>
    new RegExp(`${type}/${slug}`).test(c._id)
  );

  if (!content) return;

  return content;
}
