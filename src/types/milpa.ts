import { locales } from '@/lang/locales';

type TMilpa = {
  id: number;
  created_at: Date;
  lang: string;
  content: string;
  tags: string[];
  pageLang: locales;
};

export default TMilpa;
