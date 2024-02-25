'use client';

import { Button } from './ui/button';
import { ChevronUpIcon } from 'lucide-react';

const isBrowser = () => typeof window !== 'undefined'; //The approach recommended by Next.js

export default function BackToTop() {
  const scrollToTop = () => {
    if (!isBrowser()) return;

    window.scrollTo({ top: 0, behavior: 'auto' });
  };

  return (
    <Button
      title='Back to top'
      variant='default'
      onClick={scrollToTop}
      size='icon'
      className='fixed top-[calc(100%_-_56px)] left-[calc(100%_-_56px)] rounded-full shadow-md '
    >
      <ChevronUpIcon className='w-5' />
    </Button>
  );
}
