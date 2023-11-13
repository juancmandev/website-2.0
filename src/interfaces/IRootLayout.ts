import { Locale } from '@/dictionaries/i18n-config';

export default interface IRootLayout {
  children: React.ReactNode;
  params: {
    lang: Locale;
  };
}
