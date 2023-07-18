import {
  FirebaseIcon,
  ReactJSIcon,
  TailwindCSSIcon,
  ViteJSIcon,
} from '@/assets/Icons';
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
  ['Vite.js']: {
    label: 'Vite.js',
    icon: <ViteJSIcon />,
    backgroundColor: '#BD34FE',
    borderColor: '#fff',
  },
  ['MUI']: {
    label: 'MUI',
    icon: (
      <Image
        width={32}
        height={32}
        style={{ marginBottom: '8px' }}
        src='/icons/mui-icon.png'
        alt='Vercel icon'
      />
    ),
    backgroundColor: '#2196f3',
    borderColor: '#fff',
  },
  ['Firebase']: {
    label: 'Firebase',
    icon: <FirebaseIcon />,
    backgroundColor: ' #ffa000 ',
    borderColor: '#fff',
  },
  ['GCP']: {
    label: 'GCP',
    icon: (
      <Image
        width={32}
        height={32}
        src={'/icons/gcp-icon.png'}
        alt='GCP icon'
      />
    ),
    backgroundColor: '#de5246',
    borderColor: '#fff',
  },
  ['Node.js']: {
    label: 'Node.js',
    icon: (
      <Image
        width={32}
        height={32}
        src={'/icons/nodejs-icon.png'}
        alt='Node.js icon'
      />
    ),
    backgroundColor: '#339933',
    borderColor: '#fff',
  },
  ['ChatGPT']: {
    label: 'ChatGPT',
    icon: (
      <Image
        width={32}
        height={32}
        src={'/icons/chatgpt-icon.png'}
        alt='ChatGPT icon'
        style={{ borderRadius: '50%' }}
      />
    ),
    backgroundColor: '#00a67e',
    borderColor: '#fff',
  },
  ['JavaScript']: {
    label: 'JavaScript',
    icon: (
      <Image
        width={32}
        height={32}
        src={'/icons/js-icon.png'}
        alt='JavaScript icon'
        style={{ borderRadius: '50%' }}
      />
    ),
    backgroundColor: '#f7df1e',
    borderColor: '#000',
    textColor: '#000',
  },
  ['Computing']: {
    label: 'Computing',
    icon: <span className='text-sm'>🖥️</span>,
    backgroundColor: '#000',
    borderColor: '#fff',
    textColor: '#fff',
  },
  ['Social']: {
    label: 'Social',
    icon: <span className='text-sm'>👥</span>,
    backgroundColor: '#75c2f6',
    borderColor: '#fff',
    textColor: '#fff',
  },
  ['Humanity']: {
    label: 'Humanity',
    icon: <span className='text-sm'>🧑‍🤝‍🧑</span>,
    backgroundColor: '#a8a196',
    borderColor: '#fff',
    textColor: '#fff',
  },
  ['Internet']: {
    label: 'Internet',
    icon: <span className='text-sm'>🌐</span>,
    backgroundColor: '#068fff',
    borderColor: '#fff',
    textColor: '#fff',
  },
  ['Cyberpunk']: {
    label: 'Cyberpunk',
    icon: <span className='text-sm'>🤖</span>,
    backgroundColor: '#dd58d6',
    borderColor: '#fff',
    textColor: '#fff',
  },
};

export const tagsList = ['React.js', 'Next.js'];
