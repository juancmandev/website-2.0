import { Locale } from '@/dictionaries/i18n-config';

type TRootLayout = {
  children: React.ReactNode;
  params: {
    lang: Locale;
  };
};

export default TRootLayout;
