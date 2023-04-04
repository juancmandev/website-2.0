export default interface PostMetadataProps {
  title: string;
  date: Date;
  subtitle: string;
  slug: string;
  tags: string[];
  featuredImage: string;
  featuredImageCaption: string;
  lang?: string;
}
