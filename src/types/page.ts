import { locales } from '@/lang/locales';

type TPage = {
  params: {
    slug: string;
    locale: locales;
  };
};

export default TPage;
