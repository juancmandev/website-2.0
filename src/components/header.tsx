'use client';

import Link from 'next/link';
import { RSSIcon } from '@/assets/Icons';
import { dictionary, navItems, socialItems } from '@/utils';
import MobileMenu from './mobile-menu';

type THeader = {
  locale: 'en' | 'es';
};

export default function Header(props: THeader) {
  const changeLang = props.locale === 'en' ? 'es' : 'en';

  return (
    <header className='w-full fixed px-6 py-5 md:px-15 -top-1 z-10 flex justify-between items-center bg-dark1 shadow-md shadow-boxShadow'>
      <nav className='w-full max-w-[1200px] xl:mx-auto flex justify-between items-center'>
        <section>
          <Link
            className='focus:underline hover:underline text-xl text-primary focus:text-primaryLight hover:text-primaryLight'
            href={`/${props.locale}`}
          >
            juancmandev
          </Link>
        </section>
        <section className='hidden lg:flex items-center'>
          <ul className='flex items-center gap-8'>
            {navItems.map((navItem) => (
              <li key={navItem.label} className='w-max h-max'>
                <Link
                  href={`/${props.locale}${navItem.to}`}
                  className='font-bold hover:underline focus:underline'
                >
                  {dictionary[navItem.label][props.locale]}
                </Link>
              </li>
            ))}
          </ul>
        </section>
        <section className='hidden lg:block'>
          <ul className='flex items-center gap-4'>
            <li className='flex'>
              <Link
                title={dictionary['change_language'][props.locale]}
                className='px-2 text-xl focus:underline hover:underline'
                href={`/${changeLang}`}
              >
                {dictionary['change_language_flag'][props.locale]}
              </Link>
            </li>
            {socialItems.map((socialItem) => (
              <li title={socialItem.label} key={socialItem.to} className='flex'>
                <a
                  href={socialItem.to}
                  target='_blank'
                  className='flex flex-col items-center gap-1  
                    focus:underline hover:underline'
                >
                  {socialItem.icon}
                  <span className='text-xs'>{socialItem.label}</span>
                </a>
              </li>
            ))}
            <li className='flex'>
              <a
                title='RSS Feed'
                href={`https://juancman.dev/${props.locale}-feed.xml`}
                target='_blank'
                className='flex flex-col items-center gap-1  
                  focus:underline hover:underline'
              >
                <RSSIcon size='1.5rem' />
                <span className='text-xs'>RSS</span>
              </a>
            </li>
          </ul>
        </section>
      </nav>
      <section className='flex lg:hidden h-max items-center'>
        <MobileMenu locale={props.locale} />
      </section>
    </header>
  );
}
