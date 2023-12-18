type TItemCard = {
  title?: string;
  date?: string;
  type?: 'blog' | 'portfolio';
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
};

export default TItemCard;
