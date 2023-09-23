import { Locale } from '@/dictionaries/i18n-config';

interface IFooter {
  lang: Locale;
}

const dictionary: any = {
  ['h4']: {
    ['en']: 'Uncopyrighted by Juan Manzanero. 2023.',
    ['es']: 'Uncopyrigth por Juan Manzanero. 2023.',
  },
  ['h5']: {
    ['en']: 'The content of this website is written without AI.',
    ['es']: 'El contenido de este website está escrito sin AI.',
  },
  ['h6']: {
    ['en']: 'Built handcrafted with Next.js.',
    ['es']: 'Construido a mano con Next.js.',
  },
  ['source_code']: {
    ['en']: 'Website Source Code',
    ['es']: 'Source Code del website',
  },
};

export default function Footer({ lang }: IFooter) {
  return (
    <footer className='px-6 md:px-15 py-15 text-center bg-dark1 shadow-md shadow-boxShadow'>
      <p>{dictionary['h4'][lang]}</p>
      <p>{dictionary['h5'][lang]}</p>
      <p>{dictionary['h6'][lang]}</p>
      <a
        className='text-primary hover:underline focus:underline'
        target='_blank'
        href='https://github.com/juancmandev/website-2.0'>
        {dictionary['source_code'][lang]}
      </a>
    </footer>
  );
}
