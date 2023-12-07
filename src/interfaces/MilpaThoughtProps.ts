import { Locale } from '@/dictionaries/i18n-config';

export default interface MilpaThoughtProps {
  id: number;
  created_at: Date;
  lang: string;
  content: string;
  tags: string[];
  pageLang: Locale;
}