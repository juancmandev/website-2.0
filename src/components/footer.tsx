import { Code, RssIcon } from 'lucide-react';
import { Button } from './ui/button';
import rssParser from 'rss-parser';
import formatDate from '@/utils/format-date';

const parser = new rssParser();
const url = process.env.NEXT_PAGE_URL ?? 'https://juancman.dev';

export default async function Footer() {
  const { lastBuildDate } = await parser.parseURL(`${url}/rss.xml`);

  return (
    <footer className='border-t border-secondary px-6 pb-20 pt-16 text-center text-sm font-light md:px-16'>
      <section className='space-y-2'>
        <p>
          Uncopyrighted, developed and maintained by{' '}
          <strong className='font-bold text-primary'>juancmandev</strong>
        </p>
        <p>The content of this website is written without AI</p>
        <p>Built handcrafted with Next.js</p>
        <p>Last built {formatDate(new Date(lastBuildDate))}</p>
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
