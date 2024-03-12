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
      className='fixed right-2.5 bottom-2.5 rounded-full shadow-md '
    >
      <ChevronUpIcon className='w-5' />
    </Button>
  );
}
