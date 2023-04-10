'use client';

import { useState } from 'react';
import Link from 'next/link';
import { HamburgerIcon, CloseIcon } from '@/assets/Icons';
import Tippy from '@tippyjs/react';
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
    label: 'home',
    to: '/',
  },
  {
    label: 'blog',
    to: '/blog',
  },
  {
    label: 'projects',
    to: '/projects',
  },
  {
    label: 'contact',
    to: '/contact',
  },
];

const Header = ({ lang }: any) => {
  const changeLang = lang === 'en' ? 'es' : 'en';

  const [toggleSideMenu, setToggleSideMenu] = useState(false);

  const sideMenu = toggleSideMenu ? 'absolute' : 'hidden';

  return (
    <>
      <header className='w-full sticky px-[20px] md:px-[80px] py-[24px] -top-1 z-1 flex justify-between items-center bg-dark1 shadow-sm shadow-boxShadow'>
        <nav className='w-full flex justify-between items-center'>
          <section>
            <Link href={`/${lang}`}>
              <h1 className='text-xl font-semibold hover:underline'>
                juancmandev
              </h1>
            </Link>
          </section>
          <section className='hidden sm:flex items-center gap-[32px]'>
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
              <Link href={`/${changeLang}`}>
                <p className='text-lg'>{changeLang === 'en' ? '🇺🇸' : '🇲🇽'}</p>
              </Link>
            </Tippy>
            <ul className='flex items-center gap-[16px]'>
              {navItems.map((navItem) => (
                <li key={navItem.label} className='w-max h-max'>
                  <Link
                    href={`/${lang}${navItem.to}`}
                    className='font-bold hover:underline px-[8px] py-[4px]'>
                    {dictionary[navItem.label][lang]}
                  </Link>
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
            <button onClick={() => setToggleSideMenu(true)} id='toggle-menu'>
              <HamburgerIcon fillColor='#eee' />
            </button>
          </Tippy>
        </section>
      </header>

      <div
        onClick={() => setToggleSideMenu(false)}
        className={`${sideMenu} w-screen h-screen absolute top-0 z-20 overflow-hidden backdrop`}
      />

      <nav
        className={`${sideMenu} w-[200px] h-full py-[32px] -top-1 z-30 overflow-hidden bg-dark1 side-transition text-white1`}>
        <section className='w-full flex justify-center'>
          <Tippy
            placement='right'
            content={lang === 'en' ? 'Close Side Menu' : 'Cerrar Menú Lateral'}>
            <button onClick={() => setToggleSideMenu(false)}>
              <CloseIcon fillColor='#eee' />
            </button>
          </Tippy>
        </section>
        <section className='flex flex-col mt-[40px]'>
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
            <Link
              className='w-full my-[12px] text-center'
              href={`/${changeLang}`}>
              <p className='text-lg'>{changeLang === 'en' ? '🇺🇸' : '🇲🇽'}</p>
            </Link>
          </Tippy>
          <ul className='grid gap-[4px]'>
            {navItems.map((navItem) => (
              <li
                key={navItem.label}
                className='w-full h-max flex hover:bg-boxShadow'>
                <Link
                  href={`/${lang}${navItem.to}`}
                  onClick={() => setToggleSideMenu(false)}
                  className='w-full py-[12px] font-bold text-center hover:underline'>
                  {dictionary[navItem.label][lang]}
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </nav>
    </>
  );
};

export default Header;
