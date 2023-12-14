import { EmailIcon, GitHubIcon } from '@/assets/Icons';

export const dictionary: {
  [key: string]: {
    [key: string]: string;
  };
} = {
  ['home']: {
    ['en']: 'Home',
    ['es']: 'Inicio',
  },
  ['blog']: {
    ['en']: 'Blog',
    ['es']: 'Blog',
  },
  ['projects']: {
    ['en']: 'Projects',
    ['es']: 'Proyectos',
  },
  ['resources']: {
    ['en']: 'Resources',
    ['es']: 'Recursos',
  },
  ['change_language']: {
    ['en']: 'Cambiar idioma al Español',
    ['es']: 'Change language to English',
  },
  ['change_language_flag']: { ['en']: '🇲🇽', ['es']: '🇺🇸' },
  ['open_side_menu']: {
    ['en']: 'Open Side Menu',
    ['es']: 'Abrir Menú Lateral',
  },
  ['milpa']: {
    ['en']: 'Milpa',
    ['es']: 'Milpa',
  },
};

export const navItems = [
  {
    label: 'blog',
    to: '/blog',
  },
  {
    label: 'projects',
    to: '/projects',
  },
  {
    label: 'resources',
    to: '/resources',
  },
  {
    label: 'milpa',
    to: '/milpa',
  },
];

export const socialItems = [
  {
    to: 'https://github.com/juancmandev',
    icon: <GitHubIcon size='1.5rem' />,
    label: 'GitHub',
  },
  {
    to: 'mailto:contact@juancman.dev',
    icon: <EmailIcon size='1.5rem' />,
    label: 'Email',
  },
];
