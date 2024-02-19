import { TLocales } from '@/lang/locales';

type TPage = {
  params: {
    slug: string;
    locale: TLocales;
  };
};

export default TPage;
