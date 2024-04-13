import { Code, RssIcon } from 'lucide-react';
import { Button } from './ui/button';
import formatDate from '@/utils/format-date';

type Props = {
  lastBuildDate: string;
};

export default function Footer(props: Props) {
  return (
    <footer className='border-t border-secondary px-6 pb-20 pt-16 text-center text-sm font-light md:px-16'>
      <section className='space-y-2'>
        <p>
          Developed by{' '}
          <strong className='font-bold text-primary'>juancmandev</strong>
        </p>
        <p>
          Built handcrafted with{' '}
          <Button size={null} asChild variant='link'>
            <a href='https://nextjs.org/' target='_blank'>
              Next.js
            </a>
          </Button>
        </p>
        <p>
          Last built{' '}
          {formatDate(new Date(props.lastBuildDate).toLocaleString())}
        </p>
      </section>
      <ul className='mx-auto mt-4 flex max-w-[250px] justify-between gap-2'>
        <li>
          <Button
            size={null}
            asChild
            variant='link'
            className='flex w-max items-center gap-1'
          >
            <a target='_blank' href='https://github.com/juancmandev/website'>
              <Code className='w-6' />
              Source Code
            </a>
          </Button>
        </li>
        <li>
          <Button
            size={null}
            asChild
            variant='link'
            className='flex w-max items-center gap-1'
          >
            <a target='_blank' href='https://juancman.dev/rss.xml'>
              <RssIcon className='w-6' />
              RSS feed
            </a>
          </Button>
        </li>
      </ul>
    </footer>
  );
}
