import { EmailIcon, GitHubIcon } from '@/assets/Icons';

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
