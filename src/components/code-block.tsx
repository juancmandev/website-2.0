'use client';

import { useState } from 'react';
import { Copy, CopyCheck } from 'lucide-react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { TCodeBlock } from '@/types';
import { Button } from './ui/button';

export default function CodeBlock(props: TCodeBlock) {
  const [isCopied, setIsCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(props.code);

    setIsCopied(true);

    setTimeout(() => {
      setIsCopied(false);
    }, 5000);
  };

  return (
    <div className='p-0 bg-secondary rounded-md shadow-lg'>
      <header className='px-4 py-3 flex justify-between items-center border-b-[0.5px] border-border'>
        <span>{props.title}</span>
        <Button asChild variant='link' size='icon'>
          <button
            onClick={copyToClipboard}
            title={isCopied ? 'Copied!' : 'Copy to clipboard'}
          >
            {isCopied ? <CopyCheck size='1.6rem' /> : <Copy size='1.6rem' />}
          </button>
        </Button>
      </header>
      <SyntaxHighlighter
        customStyle={{
          padding: '0 16px 20px',
          backgroundColor: 'transparent',
        }}
        language={props.language}
        style={atomOneDark}
      >
        {props.code}
      </SyntaxHighlighter>
    </div>
  );
}
