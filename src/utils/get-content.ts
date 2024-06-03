import { allContents, Content } from 'contentlayer/generated';

export async function getAllContent(type: string) {
  const content = allContents.filter((c: Content) =>
    type === c._raw.sourceFileDir
  );

  if (!content) return;

  return content;
}

export async function getContent(type: string, slug: string) {
  const content = allContents.find((c: Content) =>
    new RegExp(`${type}/${slug}`).test(c._id),
  );

  if (!content) return;

  return content;
}
