'use client';

import { EmailIcon, GitHubIcon, RSSIcon } from '@/assets/Icons';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';

const socialItems = [
  {
    to: 'https://github.com/juancmandev/website-2.0',
    icon: <GitHubIcon size='2rem' />,
    label: 'Website Source Code',
  },
  {
    to: 'mailto:contact@juancman.dev',
    icon: <EmailIcon size='2rem' />,
    label: 'Email',
  },
];

export default function Footer() {
  return (
    <TooltipProvider>
      <footer className='px-6 md:px-15 py-12 text-center bg-dark1 shadow-md shadow-boxShadow'>
        <h5 className='font-light text-lg'>
          Uncopyrighted by Juan Manzanero. 2023.
        </h5>
        <h6>Built with Next.js.</h6>
        <ul className='mt-5 flex justify-center items-center gap-6'>
          {socialItems.map((socialItem) => (
            <li key={socialItem.label} className='inline-block w-max h-max'>
              <Tooltip>
                <TooltipTrigger asChild>
                  <a
                    href={socialItem.to}
                    target='_blank'
                    className='outline-none focus:underline hover:underline'>
                    {socialItem.icon}
                  </a>
                </TooltipTrigger>
                <TooltipContent
                  side='top'
                  className='px-2 py-1 bg-dark2 border-0'>
                  <p>{socialItem.label}</p>
                </TooltipContent>
              </Tooltip>
            </li>
          ))}
        </ul>
      </footer>
    </TooltipProvider>
  );
}
