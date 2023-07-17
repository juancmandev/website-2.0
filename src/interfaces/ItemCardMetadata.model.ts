export default interface ItemCardMetadataProps {
  title: string;
  date: Date;
  type?: 'blog' | 'projects';
  subtitle: string;
  slug: string;
  tags: string[];
  featuredImage: string;
  featuredImageCaption: string;
  lang: string;
  repo?: string;
  url?: string;
  author?: string;
}
