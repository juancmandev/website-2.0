import { Code, RssIcon } from 'lucide-react';
import { Button } from './ui/button';
import formatDate from '@/utils/format-date';

type Props = {
  lastBuildDate: string;
};

export default function Footer(props: Props) {
  return (
    <footer className='border-t border-secondary px-6 py-10 text-center text-sm font-light md:px-16'>
      <section className='space-y-2'>
        <p>
          Developed by <strong className='font-bold '>juancmandev</strong>
        </p>
        <p>
          Built handcrafted with{' '}
          <Button
            asChild
            size={null}
            variant='link'
            className='m-0 p-0 text-base text-primary no-underline hover:underline'
          >
            <a href='https://nextjs.org/' target='_blank'>
              Next.js
            </a>
          </Button>
        </p>
        <p>Last built {formatDate(new Date(props.lastBuildDate))}</p>
      </section>
      <ul className='mx-auto mt-4 flex max-w-[200px] justify-between'>
        <li>
          <Button
            size={null}
            asChild
            variant='link'
            className='flex flex-col justify-center'
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
            className='flex flex-col justify-center'
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
