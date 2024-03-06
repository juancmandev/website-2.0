import dynamic from 'next/dynamic';
import Link from 'next/link';
import { navItems } from '@/utils';
import { Button } from './ui/button';

const MobileMenu = dynamic(() => import('@/components/mobile-menu'));

export default function Header() {
  return (
    <header className='w-full p-6 md:px-15 flex justify-between items-center'>
      <nav className='w-full max-w-[1200px] xl:mx-auto flex justify-between items-center'>
        <section>
          <Button
            asChild
            size='icon'
            variant='link'
            className='px-0 rounded-full'
          >
            <Link href='/'>
              <img
                className='w-10 h-10'
                src='/logo.png'
                alt='juancmandev logo'
              />
            </Link>
          </Button>
        </section>
        <section className='hidden lg:flex items-center'>
          <ul className='flex items-center gap-4'>
            {navItems.map((navItem) => (
              <li key={navItem.label} className='w-max h-max'>
                <Button asChild variant='link' className='px-2'>
                  <Link href={navItem.to}>{navItem.label}</Link>
                </Button>
              </li>
            ))}
          </ul>
        </section>
      </nav>
      <section className='flex lg:hidden h-max items-center'>
        <MobileMenu />
      </section>
    </header>
  );
}
