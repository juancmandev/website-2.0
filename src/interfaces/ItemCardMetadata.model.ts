export default interface ItemCardMetadataProps {
  title: string;
  date: string;
  type?: 'blog' | 'projects';
  subtitle: string;
  slug: string;
  tags: string;
  featuredImage: string;
  featuredImageCaption: string;
  lang: string;
  repo?: string;
  url?: string;
  author?: string;
  content?: string;
}
