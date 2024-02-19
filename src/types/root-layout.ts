import { TLocales } from '@/lang/locales';

type TRootLayout = {
  children: React.ReactNode;
  params: {
    locale: TLocales;
  };
};

export default TRootLayout;
