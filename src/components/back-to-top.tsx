'use client';

import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronUpIcon } from 'lucide-react';
import { clsx } from 'clsx';

const isBrowser = () => typeof window !== 'undefined';

export default function BackToTop() {
  const [show, setShow] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  function scrollToTop() {
    if (!isBrowser()) return;

    window.scrollTo({ top: 0, behavior: 'auto' });
  }

  function handleShow() {
    if (!isBrowser()) return;

    window.addEventListener('scroll', () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < scrollY && currentScrollY > 100) {
        setShow(true);
      } else {
        setShow(false);
      }

      setScrollY(currentScrollY);
    });
  }

  useEffect(() => {
    window.addEventListener('scroll', handleShow);

    return () => {
      window.removeEventListener('scroll', handleShow);
    };
  });

  return (
    <Button
      size='icon'
      variant='secondary'
      title='Back to top'
      onClick={scrollToTop}
      className={clsx(
        'fixed bottom-4 right-4 rounded-full shadow-md transition-all ease-in duration-150',
        show ? 'opacity-100 visible' : 'opacity-0 invisible',
      )}
    >
      <ChevronUpIcon className='w-6' />
    </Button>
  );
}
