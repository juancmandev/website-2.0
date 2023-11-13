export default interface IItemCard {
  title?: string;
  date?: string;
  type?: 'blog' | 'projects';
  description?: string;
  slug: string;
  tags?: string[];
  image?: string;
  imageCaption?: string;
  lang: string;
  repo?: string;
  url?: string;
  author?: string;
  content?: string;
}
