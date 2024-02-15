import { TLocales } from '@/lang/locales';
import months from './months';

export function formatDate(date: string, locale: TLocales) {
  if (locale === 'en') {
    return `${months(locale, new Date(date).getMonth())} 
    ${new Date(date).getDate()}, 
    ${new Date(date).getFullYear()}`;
  } else if (locale === 'es') {
    return `${new Date(date).getDate()} de 
    ${months(locale, new Date(date).getMonth())} 
    del ${new Date(date).getFullYear()}`;
  }
}
