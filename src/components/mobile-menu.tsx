'use client';

import { ScrollArea } from './ui/scroll-area';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
  SheetClose,
} from '@/components/ui/sheet';
import { ChangeLanguage } from '@/components';
import { Button } from './ui/button';
import { MenuIcon, Rss } from 'lucide-react';
import { navItems, socialItems } from '@/utils';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

type TLocale = {
  locale: 'en' | 'es';
};

export default function MobileMenu(props: TLocale) {
  const t = useTranslations();

  return (
    <Sheet>
      <SheetTrigger asChild title={t('header.open_menu')}>
        <Button className='p-2' variant='ghost'>
          <MenuIcon />
        </Button>
      </SheetTrigger>
      <SheetContent
        side='right'
        className='w-max text-center px-0 pt-14 bg-secondary border-0 shadow-2xl'
      >
        <SheetHeader>
          <ScrollArea>
            <nav className='h-[calc(100vh_-_100px)]'>
              <section>
                <Link
                  href={`/${props.locale}`}
                  className='flex text-lg cursor-default w-full px-10 py-2 font-bold text-center hover:bg-background/50 focus:bg-background/50 text-primary'
                >
                  juancmandev
                </Link>
              </section>
              <section className='flex flex-col mt-1'>
                <ul className='flex flex-col gap-1'>
                  {navItems.map((navItem) => (
                    <li key={navItem.label} className='w-full h-max flex'>
                      <SheetClose asChild>
                        <Link
                          href={navItem.to}
                          className='cursor-default w-full px-10 py-2 font-bold text-center hover:bg-background/50 focus:bg-background/50'
                        >
                          {t(`header.${navItem.label}`)}
                        </Link>
                      </SheetClose>
                    </li>
                  ))}
                </ul>
              </section>
              <section className='mt-2'>
                <ul className='flex flex-col gap-0.5'>
                  <li className='flex h-max'>
                    <SheetClose asChild>
                      <span className='w-full py-2 hover:bg-background/50 focus:bg-background/50'>
                        <ChangeLanguage locale={props.locale} />
                      </span>
                    </SheetClose>
                  </li>
                  {socialItems.map((socialItem) => (
                    <li title={socialItem.label} key={socialItem.to}>
                      <SheetClose asChild>
                        <a
                          href={socialItem.to}
                          target='_blank'
                          className='cursor-default w-full flex justify-center py-1 text-center hover:bg-background/50 focus:bg-background/50'
                        >
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
                      href={`https://juancman.dev/${props.locale}-feed.xml`}
                      target='_blank'
                      className='cursor-default w-full flex justify-center py-3 text-center hover:bg-background/50 focus:bg-background/50'
                    >
                      <div className='flex flex-col items-center gap-1'>
                        <Rss />
                        <span className='text-xs'>RSS</span>
                      </div>
                    </a>
                  </li>
                </ul>
              </section>
            </nav>
          </ScrollArea>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}
