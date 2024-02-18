'use client';

import { useCallback, useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import { Button } from './ui/button';
import { CheckIcon, CopyIcon } from 'lucide-react';

interface CopyButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  value: string;
}

export default function CopyButton({
  value,
  className,
  ...props
}: CopyButtonProps) {
  const [hasCopied, setHasCopied] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setHasCopied(false);
    }, 2000);
  }, [hasCopied]);

  const copyToClipboard = useCallback((value: string) => {
    navigator.clipboard.writeText(value);

    setHasCopied(true);
  }, []);

  return (
    <Button
      title={hasCopied ? 'Copied!' : 'Copy to clipboard'}
      size={null}
      variant='ghost'
      className={cn('absolute p-2 top-1.5 right-2 ', className)}
      onClick={() => copyToClipboard(value)}
      {...props}
    >
      <span className='sr-only'>Copy</span>
      {hasCopied ? (
        <CheckIcon className='w-4 h-4' />
      ) : (
        <CopyIcon className='w-4 h-4' />
      )}
    </Button>
  );
}
