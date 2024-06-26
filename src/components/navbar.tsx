import dynamic from 'next/dynamic';
import Link from 'next/link';
import { navItems } from '@/utils/nav-links';
import { Button } from './ui/button';

const MobileMenu = dynamic(() => import('@/components/mobile-menu'));

export default function Navbar() {
  return (
    <nav className=' px-6 py-1 fixed top-0 z-50 flex w-full items-center justify-between border-b border-secondary backdrop-blur-lg'>
      <div className='flex w-full max-w-[1200px] items-center justify-between xl:mx-auto'>
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
                className='h-8 w-8'
                width={32}
                height={32}
                src='/logo.png'
                alt='juancmandev logo'
              />
            </Link>
          </Button>
        </section>
        <section className='hidden items-center md:flex'>
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
      </div>
      <section className='flex h-max items-center md:hidden'>
        <MobileMenu />
      </section>
    </nav>
  );
}
