import { Code, RssIcon } from 'lucide-react';
import { Button } from './ui/button';

export default function Footer() {
  return (
    <footer className='px-6 py-8 text-center text-sm font-light md:px-16'>
      <p>Uncopyrighted by Juan Manzanero. 2024.</p>
      <p>The content of this website is written without AI.</p>
      <p>Built handcrafted with Next.js.</p>
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
