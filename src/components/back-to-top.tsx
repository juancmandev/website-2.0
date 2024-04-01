'use client';

import { Button } from './ui/button';
import { ChevronUpIcon } from 'lucide-react';

const isBrowser = () => typeof window !== 'undefined';

export default function BackToTop() {
  function scrollToTop() {
    if (!isBrowser()) return;

    window.scrollTo({ top: 0, behavior: 'auto' });
  }

  return (
    <Button
      title='Back to top'
      variant='default'
      onClick={scrollToTop}
      size='icon'
      className='fixed bottom-4 right-4 rounded-full shadow-md '
    >
      <ChevronUpIcon className='w-5' />
    </Button>
  );
}
