'use client';

import { useState, useEffect, useRef } from 'react';
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
  const [windowSize, setWindowSize] = useState<number[]>([0, 0]);
  const sidebar = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const handleWindowResize = () =>
      setWindowSize([window.innerWidth, window.innerHeight]);

    window.addEventListener('resize', handleWindowResize);

    handleWindowResize();

    return () => window.removeEventListener('resize', handleWindowResize);
  }, []);

  const handleDialogClick = (
    e: React.MouseEvent<HTMLDialogElement, MouseEvent>
  ) => {
    if (e.currentTarget.tagName !== 'DIALOG') return;

    const rect = e.currentTarget.getBoundingClientRect();

    const clickedInDialog =
      rect.top <= e.clientY &&
      e.clientY <= rect.top + rect.height &&
      rect.left <= e.clientX &&
      e.clientX <= rect.left + rect.width;

    if (clickedInDialog === false) e.currentTarget.close();
  };

  useEffect(() => {
    const handleWindowResize = () =>
      setWindowSize([window.innerWidth, window.innerHeight]);

    window.addEventListener('resize', handleWindowResize);

    handleWindowResize();

    return () => window.removeEventListener('resize', handleWindowResize);
  }, []);

  return (
    <>
      <header className='w-full sticky p-6 md:px-15 -top-1 z-10 flex justify-between items-center bg-dark1 shadow-sm shadow-boxShadow'>
        <nav className='w-full flex justify-between items-center'>
          <section>
            <Link
              className='outline-none focus:underline hover:underline text-xl text-primary focus:text-primaryLight hover:text-primaryLight'
              href={`/${lang}`}>
              juancmandev
            </Link>
          </section>
          <section className='hidden sm:flex items-center gap-8'>
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
                className='outline-none focus:underline'
                tabIndex={windowSize[0] < 728 ? -1 : 0}
                href={`/${changeLang}`}>
                <p className='text-lg'>{changeLang === 'en' ? '🇺🇸' : '🇲🇽'}</p>
              </Link>
            </Tippy>
            <ul className='flex items-center gap-8'>
              {navItems.map((navItem) => (
                <li key={navItem.label} className='w-max h-max'>
                  <Link
                    tabIndex={windowSize[0] < 728 ? -1 : 0}
                    href={`/${lang}${navItem.to}`}
                    className='outline-none font-bold hover:underline focus:underline text-lg'>
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
            <button
              className='outline-none focus:text-primary hover:text-primary'
              onClick={() => sidebar.current?.showModal()}
              id='toggle-menu'>
              <HamburgerIcon size={32} />
            </button>
          </Tippy>
        </section>
      </header>

      <dialog
        onClick={handleDialogClick}
        ref={sidebar}
        className='px-0 py-8 min-h-screen ml-0 bg-dark1 text-white1'>
        <div className='w-full flex justify-center'>
          <button
            className='p-2 outline-none flex justify-center focus:text-primary hover:text-primary w-full my-4 py-3 text-center hover:bg-boxShadow focus:underline focus:bg-boxShadow'
            onClick={() => sidebar.current?.close()}>
            <CloseIcon size={32} />
          </button>
        </div>
        <nav>
          <section className='flex flex-col mt-10'>
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
                className='outline-none w-full my-4 py-3 text-center hover:bg-boxShadow focus:underline focus:bg-boxShadow'
                href={`/${changeLang}`}>
                <p className='text-2xl'>{changeLang === 'en' ? '🇺🇸' : '🇲🇽'}</p>
              </Link>
            </Tippy>
            <ul className='flex flex-col gap-2'>
              {navItems.map((navItem) => (
                <li key={navItem.label} className='w-full h-max flex'>
                  <Link
                    href={`/${lang}${navItem.to}`}
                    onClick={() => sidebar.current?.close()}
                    className='outline-none w-full px-10 py-3 font-bold text-center text-lg hover:underline hover:bg-boxShadow focus:underline focus:bg-boxShadow'>
                    {dictionary[navItem.label][lang]}
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        </nav>
      </dialog>
    </>
  );
};

export default Header;
