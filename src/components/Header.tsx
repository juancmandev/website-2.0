'use client';

import { useState } from 'react';
import Link from 'next/link';
import { HamburgerIcon, CloseIcon } from '@/assets/Icons';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

const navItems = [
  {
    label: 'Home',
    to: '/',
  },
  {
    label: 'Blog',
    to: '/blog',
  },
  {
    label: 'Projects',
    to: '/projects',
  },
  {
    label: 'About',
    to: '/about',
  },
];

const Header = () => {
  const [toggleSideMenu, setToggleSideMenu] = useState(false);

  const sideMenu = toggleSideMenu ? 'absolute' : 'hidden';

  return (
    <>
      <header className='w-full sticky px-[20px] md:px-[80px] py-[24px] -top-1 z-1 flex justify-between items-center bg-dark1 shadow-sm shadow-boxShadow'>
        <nav className='w-full flex justify-between items-center'>
          <section>
            <Link href='/'>
              <h1 className='text-lg font-semibold hover:underline'>
                juancmandev
              </h1>
            </Link>
          </section>
          <section>
            <ul className='hidden sm:flex items-center gap-[16px]'>
              {navItems.map((navItem) => (
                <li key={navItem.label} className='w-max h-max'>
                  <Link
                    href={navItem.to}
                    className='hover:underline px-[8px] py-[4px]'>
                    {navItem.label}
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        </nav>
        <section className='flex sm:hidden h-max items-center'>
          <Tippy placement='left' content='Open side menu'>
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
        <section className='flex justify-center'>
          <Tippy placement='right' content='Close side menu'>
            <button onClick={() => setToggleSideMenu(false)}>
              <CloseIcon fillColor='#eee' />
            </button>
          </Tippy>
        </section>
        <section>
          <ul className='mt-[40px] grid gap-[4px]'>
            {navItems.map((navItem) => (
              <li
                key={navItem.label}
                className='w-full h-max flex hover:bg-boxShadow'>
                <Link
                  href={navItem.to}
                  onClick={() => setToggleSideMenu(false)}
                  className='w-full py-[12px] text-center hover:underline'>
                  {navItem.label}
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
