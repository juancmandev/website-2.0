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
import { MenuIcon } from 'lucide-react';
import { navItems } from '@/utils';
import Link from 'next/link';

export default function MobileMenu() {
  return (
    <Sheet>
      <SheetTrigger asChild title='Open menu'>
        <Button size='icon' variant='ghost'>
          <MenuIcon />
        </Button>
      </SheetTrigger>
      <SheetContent
        side='right'
        className='w-max px-0 pt-14 bg-secondary border-0 shadow-2xl'
      >
        <SheetHeader>
          <ScrollArea>
            <nav className='h-[calc(100vh_-_100px)]'>
              <section className='flex flex-col mt-1'>
                <ul className='flex flex-col gap-1'>
                  {navItems.map((navItem) => (
                    <li key={navItem.label} className='w-full h-max flex'>
                      <SheetClose asChild>
                        <Button
                          asChild
                          size={null}
                          variant='link'
                          className='w-full px-10 py-3 cursor-default rounded-none hover:bg-background/50 focus:bg-background/50 hover:no-underline'
                        >
                          <Link className='capitalize' href={navItem.to}>
                            {navItem.label}
                          </Link>
                        </Button>
                      </SheetClose>
                    </li>
                  ))}
                </ul>
              </section>
            </nav>
          </ScrollArea>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}
