import { Mail, Github } from 'lucide-react';

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
    icon: <Github className='w-4' />,
    label: 'GitHub',
  },
  {
    to: 'mailto:contact@juancman.dev',
    icon: <Mail className='w-4' />,
    label: 'Email',
  },
];
