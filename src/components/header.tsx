'use client';

import Link from 'next/link';
import { Rss } from 'lucide-react';
import { navItems, socialItems } from '@/utils';
import MobileMenu from './mobile-menu';
import { useTranslations } from 'next-intl';
import { ChangeLanguage } from '@/components';
import { Button } from './ui/button';

type THeader = {
  locale: 'en' | 'es';
};

export default function Header(props: THeader) {
  const t = useTranslations();

  return (
    <header className='w-full fixed px-6 py-4 md:px-15 -top-1 z-10 flex justify-between items-center bg-secondary shadow-2xl'>
      <nav className='w-full max-w-[1200px] xl:mx-auto flex justify-between items-center'>
        <section>
          <Button asChild variant='link' className='text-primary text-lg'>
            <Link href={`/${props.locale}`}>juancmandev</Link>
          </Button>
        </section>
        <section className='hidden lg:flex items-center'>
          <ul className='flex items-center gap-4'>
            {navItems.map((navItem) => (
              <li key={navItem.label} className='w-max h-max'>
                <Button asChild variant='link' className='px-2'>
                  <Link href={`${props.locale}${navItem.to}`}>
                    {t(`header.${navItem.label}`)}
                  </Link>
                </Button>
              </li>
            ))}
          </ul>
        </section>
        <section className='hidden lg:block'>
          <ul className='flex items-center gap-2'>
            <li className='flex'>
              <ChangeLanguage locale={props.locale} />
            </li>
            {socialItems.map((socialItem) => (
              <li title={socialItem.label} key={socialItem.to} className='flex'>
                <Button
                  asChild
                  size={null}
                  variant='link'
                  className='px-1 grid justify-items-center'
                >
                  <a
                    title={socialItem.label}
                    href={socialItem.to}
                    target='_blank'
                  >
                    {socialItem.icon}
                    <span className='text-xs'>{socialItem.label}</span>
                  </a>
                </Button>
              </li>
            ))}
            <li className='flex'>
              <Button
                asChild
                size={null}
                variant='link'
                className='px-1 grid justify-items-center'
              >
                <a
                  title='RSS Feed'
                  href={`https://juancman.dev/${props.locale}-feed.xml`}
                  target='_blank'
                >
                  <Rss className='w-4' />
                  <span className='text-xs'>RSS</span>
                </a>
              </Button>
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
