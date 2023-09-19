import { Locale } from '@/dictionaries/i18n-config';

export interface PageProps {
  params: {
    slug: string;
    lang: Locale;
  };
}
