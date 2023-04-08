import { ReactJSIcon, TailwindCSSIcon } from '@/assets/Icons';
import Image from 'next/image';

export const tags: any = {
  ['React.js']: {
    label: 'React.js',
    icon: <ReactJSIcon />,
    backgroundColor: '#00befb',
    borderColor: '#fff',
  },
  ['Next.js']: {
    label: 'Next.js',
    icon: (
      <Image
        width={32}
        height={32}
        src='/icons/nextjs-icon-light-background.png'
        alt='Next.js icon'
      />
    ),
    backgroundColor: '#000',
    borderColor: '#fff',
  },
  ['TypeScript']: {
    label: 'TypeScript',
    icon: (
      <Image
        width={32}
        height={32}
        src='/icons/ts-logo-round-512.png'
        alt='TypeScript icon'
      />
    ),
    backgroundColor: '#007acc',
    borderColor: '#fff',
  },
  ['TailwindCSS']: {
    label: 'TailwindCSS',
    icon: <TailwindCSSIcon />,
    backgroundColor: '#06b6d4',
    borderColor: '#fff',
  },
  ['Vercel']: {
    label: 'Vercel',
    icon: (
      <Image
        width={32}
        height={32}
        style={{ marginBottom: '8px' }}
        src='/icons/vercel-icon-dark.png'
        alt='Vercel icon'
      />
    ),
    backgroundColor: '#000',
    borderColor: '#fff',
  },
};

export const tagsList = ['React.js', 'Next.js'];