'use client';

import Link from 'next/link';
import { EmailIcon, GitHubIcon, HamburgerIcon } from '@/assets/Icons';
import Tippy from '@tippyjs/react';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
  SheetClose,
} from '@/components/ui/sheet';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import 'tippy.js/dist/tippy.css';

const dictionary: any = {
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
  ['contact']: {
    ['en']: 'Contact',
    ['es']: 'Contacto',
  },
};

const navItems = [
  {
    label: 'blog',
    to: '/blog',
  },
  {
    label: 'projects',
    to: '/projects',
  },
];

const socialItems = [
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

export default function Header({ lang }: any) {
  const changeLang = lang === 'en' ? 'es' : 'en';

  return (
    <Sheet>
      <TooltipProvider>
        <header className='w-full p-6 md:px-15 z-10 flex justify-between items-center bg-dark1 shadow-md shadow-boxShadow'>
          <nav className='w-full max-w-[1200px] xl:mx-auto flex justify-between items-center'>
            <section>
              <Link
                className='outline-none focus:underline hover:underline text-xl text-primary focus:text-primaryLight hover:text-primaryLight'
                href={`/${lang}`}>
                juancmandev
              </Link>
            </section>
            <section className='hidden sm:flex items-center gap-8'>
              <ul className='flex items-center gap-8'>
                {navItems.map((navItem) => (
                  <li key={navItem.label} className='w-max h-max'>
                    <Link
                      href={`/${lang}${navItem.to}`}
                      className='outline-none font-bold hover:underline focus:underline text-lg'>
                      {dictionary[navItem.label][lang]}
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
            <section className='hidden sm:block'>
              <ul className='flex items-center gap-6'>
                <li className='flex'>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Link
                        className='px-2 focus:underline hover:underline'
                        href={`/${changeLang}`}>
                        <p className='text-2xl'>
                          {changeLang === 'en' ? '🇺🇸' : '🇲🇽'}
                        </p>
                      </Link>
                    </TooltipTrigger>
                    <TooltipContent
                      side='bottom'
                      className='px-2 py-1 bg-dark2 border-0'>
                      <p>
                        {lang === 'en'
                          ? `Cambiar idioma al ${
                              changeLang === 'en' ? 'Inglés' : 'Español'
                            }`
                          : `Change language to ${
                              changeLang === 'en' ? 'English' : 'Spanish'
                            }`}
                      </p>
                    </TooltipContent>
                  </Tooltip>
                </li>
                {socialItems.map((socialItem) => (
                  <li key={socialItem.to} className='flex'>
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
                        side='bottom'
                        className='px-2 py-1 bg-dark2 border-0'>
                        <p>{socialItem.label}</p>
                      </TooltipContent>
                    </Tooltip>
                  </li>
                ))}
              </ul>
            </section>
          </nav>

          <section className='flex sm:hidden h-max items-center'>
            <Tippy
              trigger='none'
              placement='left'
              content={lang === 'en' ? 'Open Side Menu' : 'Abrir Menú Lateral'}>
              <SheetTrigger>
                <HamburgerIcon size={28} />
              </SheetTrigger>
            </Tippy>
          </section>
        </header>

        <SheetContent
          side='right'
          className='w-max text-center px-0 pt-20 border-0 shadow-boxShadow shadow-md bg-dark1'>
          <SheetHeader>
            <nav>
              <section>
                <Link
                  className='outline-none text-xl cursor-default w-full px-10 py-4 font-bold text-center hover:bg-[rgba(0,_0,_0,_0.2)] focus:bg-[rgba(0,_0,_0,_0.2)] text-primary focus:text-primaryLight hover:text-primaryLight'
                  href={`/${lang}`}>
                  juancmandev
                </Link>
              </section>
              <section className='flex flex-col mt-5'>
                <ul className='flex flex-col gap-2'>
                  {navItems.map((navItem) => (
                    <li key={navItem.label} className='w-full h-max flex'>
                      <SheetClose asChild>
                        <Link
                          href={`/${lang}${navItem.to}`}
                          className='outline-none cursor-default w-full px-10 py-3 font-bold text-center text-lg hover:bg-[rgba(0,_0,_0,_0.2)] focus:bg-[rgba(0,_0,_0,_0.2)]'>
                          {dictionary[navItem.label][lang]}
                        </Link>
                      </SheetClose>
                    </li>
                  ))}
                </ul>
              </section>
              <section className='mt-5'>
                <ul className='flex flex-col gap-2'>
                  <li className='flex h-max'>
                    <Tippy
                      placement='left'
                      content={
                        lang === 'en'
                          ? `Cambiar idioma al ${
                              changeLang === 'en' ? 'Inglés' : 'Español'
                            }`
                          : `Change language to ${
                              changeLang === 'en' ? 'English' : 'Spanish'
                            }`
                      }>
                      <SheetClose asChild>
                        <Link
                          className='outline-none cursor-default w-full py-3 text-center hover:bg-[rgba(0,_0,_0,_0.2)] focus:bg-[rgba(0,_0,_0,_0.2)]'
                          href={`/${changeLang}`}>
                          <p className='text-2xl'>
                            {changeLang === 'en' ? '🇺🇸' : '🇲🇽'}
                          </p>
                        </Link>
                      </SheetClose>
                    </Tippy>
                  </li>
                  {socialItems.map((socialItem) => (
                    <li key={socialItem.to}>
                      <Tippy placement='left' content={socialItem.label}>
                        <SheetClose asChild>
                          <a
                            href={socialItem.to}
                            target='_blank'
                            className='outline-none cursor-default w-full flex justify-center py-3 text-center hover:bg-[rgba(0,_0,_0,_0.2)] focus:bg-[rgba(0,_0,_0,_0.2)]'>
                            {socialItem.icon}
                          </a>
                        </SheetClose>
                      </Tippy>
                    </li>
                  ))}
                </ul>
              </section>
            </nav>
          </SheetHeader>
        </SheetContent>
      </TooltipProvider>
    </Sheet>
  );
}
