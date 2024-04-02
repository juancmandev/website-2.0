import dynamic from 'next/dynamic';
import Link from 'next/link';
import { navItems } from '@/utils';
import { Button } from './ui/button';

const MobileMenu = dynamic(() => import('@/components/mobile-menu'));

export default function Header() {
  return (
    <header className='md:px-15 flex w-full items-center justify-between p-6'>
      <nav className='flex w-full max-w-[1200px] items-center justify-between xl:mx-auto'>
        <section>
          <Button
            asChild
            size='icon'
            variant='link'
            className='rounded-full px-0'
          >
            <Link href='/'>
              <img
                loading='lazy'
                className='h-10 w-10'
                width={40}
                height={40}
                src='/logo.png'
                alt='juancmandev logo'
              />
            </Link>
          </Button>
        </section>
        <section className='hidden items-center lg:flex'>
          <ul className='flex items-center gap-4'>
            {navItems.map((navItem) => (
              <li key={navItem.label} className='h-max w-max'>
                <Button asChild variant='link' className='px-2'>
                  <Link href={navItem.to}>{navItem.label}</Link>
                </Button>
              </li>
            ))}
          </ul>
        </section>
      </nav>
      <section className='flex h-max items-center lg:hidden'>
        <MobileMenu />
      </section>
    </header>
  );
}
