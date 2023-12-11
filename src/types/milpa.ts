import { Locale } from '@/dictionaries/i18n-config';

type TMilpa = {
  id: number;
  created_at: Date;
  lang: string;
  content: string;
  tags: string[];
  pageLang: Locale;
};

export default TMilpa;
