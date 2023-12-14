'use client';

import { ScrollArea } from './ui/scroll-area';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
  SheetClose,
} from '@/components/ui/sheet';

import { Button } from './ui/button';
import { HamburgerIcon, RSSIcon } from '@/assets/Icons';
import { navItems, socialItems } from '@/utils';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

type TLocale = {
  locale: 'en' | 'es';
};

export default function MobileMenu(props: TLocale) {
  const t = useTranslations();
  const changeLang = props.locale === 'en' ? 'es' : 'en';

  return (
    <Sheet>
      <SheetTrigger asChild title={t('header.open_menu')}>
        <Button className='p-2' variant='ghost'>
          <HamburgerIcon size={28} />
        </Button>
      </SheetTrigger>
      <SheetContent
        side='right'
        className='w-max text-center px-0 pt-14 border-0 shadow-boxShadow shadow-md bg-dark1'
      >
        <SheetHeader>
          <ScrollArea>
            <nav className='h-[calc(100vh_-_100px)]'>
              <section>
                <Link
                  href={`/${props.locale}`}
                  className='flex text-lg cursor-default w-full px-10 py-2 font-bold text-center hover:bg-[rgba(0,_0,_0,_0.2)] focus:bg-[rgba(0,_0,_0,_0.2)] text-primary focus:text-primaryLight hover:text-primaryLight'
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
                          className='cursor-default w-full px-10 py-2 font-bold text-center hover:bg-[rgba(0,_0,_0,_0.2)] focus:bg-[rgba(0,_0,_0,_0.2)]'
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
                      <Link
                        title={t('header.change_language')}
                        className='text-xl cursor-default w-full py-2 text-center hover:bg-[rgba(0,_0,_0,_0.2)] focus:bg-[rgba(0,_0,_0,_0.2)]'
                        href={`/${changeLang}`}
                      >
                        {t(`header.${props.locale}`)}
                      </Link>
                    </SheetClose>
                  </li>
                  {socialItems.map((socialItem) => (
                    <li title={socialItem.label} key={socialItem.to}>
                      <SheetClose asChild>
                        <a
                          href={socialItem.to}
                          target='_blank'
                          className='cursor-default w-full flex justify-center py-1 text-center hover:bg-[rgba(0,_0,_0,_0.2)] focus:bg-[rgba(0,_0,_0,_0.2)]'
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
                      className='cursor-default w-full flex justify-center py-3 text-center hover:bg-[rgba(0,_0,_0,_0.2)] focus:bg-[rgba(0,_0,_0,_0.2)]'
                    >
                      <div className='flex flex-col items-center gap-1'>
                        <RSSIcon size='1.5rem' />
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
