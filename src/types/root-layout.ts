import { locales } from '@/lang/locales';

type TRootLayout = {
  children: React.ReactNode;
  params: {
    locale: locales;
  };
};

export default TRootLayout;
