'use client';

import Link from 'next/link';
import { EmailIcon, GitHubIcon, HamburgerIcon, RSSIcon } from '@/assets/Icons';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
  SheetClose,
} from '@/components/ui/sheet';

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
  ['change_language']: {
    ['en']: 'Cambiar idioma al Español',
    ['es']: 'Change language to English',
  },
  ['change_language_flag']: { ['en']: '🇲🇽', ['es']: '🇺🇸' },
  ['open_side_menu']: {
    ['en']: 'Open Side Menu',
    ['es']: 'Abrir Menú Lateral',
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
      <header className='w-full p-6 md:px-15 sticky -top-1 z-10 flex justify-between items-center bg-dark1 shadow-md shadow-boxShadow'>
        <nav className='w-full max-w-[1200px] xl:mx-auto flex justify-between items-center'>
          <section>
            <Link
              className='focus:underline hover:underline text-xl text-primary focus:text-primaryLight hover:text-primaryLight'
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
                    className='font-bold hover:underline focus:underline text-lg'>
                    {dictionary[navItem.label][lang]}
                  </Link>
                </li>
              ))}
            </ul>
          </section>
          <section className='hidden sm:block'>
            <ul className='flex items-center gap-6'>
              <li className='flex'>
                <Link
                  title={dictionary['change_language'][lang]}
                  className='px-2 text-xl focus:underline hover:underline'
                  href={`/${changeLang}`}>
                  {dictionary['change_language_flag'][lang]}
                </Link>
              </li>
              {socialItems.map((socialItem) => (
                <li
                  title={socialItem.label}
                  key={socialItem.to}
                  className='flex'>
                  <a
                    href={socialItem.to}
                    target='_blank'
                    className='flex flex-col items-center gap-1  
                    focus:underline hover:underline'>
                    {socialItem.icon}
                    <span className='text-xs'>{socialItem.label}</span>
                  </a>
                </li>
              ))}
              <li className='flex'>
                <a
                  title='RSS Feed'
                  href={`https://juancman.dev/${lang}/feed.xml`}
                  target='_blank'
                  className='flex flex-col items-center gap-1  
                  focus:underline hover:underline'>
                  <RSSIcon size='1.5rem' />
                  <span className='text-xs'>RSS</span>
                </a>
              </li>
            </ul>
          </section>
        </nav>

        <section className='flex sm:hidden h-max items-center'>
          <SheetTrigger title={dictionary['open_side_menu'][lang]}>
            <HamburgerIcon size={28} />
          </SheetTrigger>
        </section>
      </header>

      <SheetContent
        side='right'
        className='w-max text-center px-0 pt-20 border-0 shadow-boxShadow shadow-md bg-dark1'>
        <SheetHeader>
          <nav>
            <section>
              <Link
                className='text-xl cursor-default w-full px-10 py-4 font-bold text-center hover:bg-[rgba(0,_0,_0,_0.2)] focus:bg-[rgba(0,_0,_0,_0.2)] text-primary focus:text-primaryLight hover:text-primaryLight'
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
                        className='cursor-default w-full px-10 py-3 font-bold text-center text-lg hover:bg-[rgba(0,_0,_0,_0.2)] focus:bg-[rgba(0,_0,_0,_0.2)]'>
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
                  <SheetClose asChild>
                    <Link
                      title={dictionary['change_language'][lang]}
                      className='text-xl cursor-default w-full py-3 text-center hover:bg-[rgba(0,_0,_0,_0.2)] focus:bg-[rgba(0,_0,_0,_0.2)]'
                      href={`/${changeLang}`}>
                      {dictionary['change_language_flag'][lang]}
                    </Link>
                  </SheetClose>
                </li>
                {socialItems.map((socialItem) => (
                  <li title={socialItem.label} key={socialItem.to}>
                    <SheetClose asChild>
                      <a
                        href={socialItem.to}
                        target='_blank'
                        className='cursor-default w-full flex justify-center py-3 text-center hover:bg-[rgba(0,_0,_0,_0.2)] focus:bg-[rgba(0,_0,_0,_0.2)]'>
                        <div className='flex flex-col items-center gap-1'>
                          {socialItem.icon}
                          <span className='text-xs'>{socialItem.label}</span>
                        </div>
                      </a>
                    </SheetClose>
                  </li>
                ))}
                <li className='flex'>
                  <a
                    title='RSS Feed'
                    href={`https://juancman.dev/${lang}/feed.xml`}
                    target='_blank'
                    className='cursor-default w-full flex justify-center py-3 text-center hover:bg-[rgba(0,_0,_0,_0.2)] focus:bg-[rgba(0,_0,_0,_0.2)]'>
                    <div className='flex flex-col items-center gap-1'>
                      <RSSIcon size='1.5rem' />
                      <span className='text-xs'>RSS</span>
                    </div>
                  </a>
                </li>
              </ul>
            </section>
          </nav>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}
