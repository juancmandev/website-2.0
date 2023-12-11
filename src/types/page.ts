import { Locale } from '@/dictionaries/i18n-config';

type TPage = {
  params: {
    slug: string;
    lang: Locale;
  };
};

export default TPage;
