import { Button } from './ui/button';

export default function Footer() {
  return (
    <footer className='space-y-1 text-sm font-light px-6 md:px-16 py-8 text-center'>
      <p>Uncopyrighted by Juan Manzanero. 2024.</p>
      <p>The content of this website is written without AI.</p>
      <p>Built handcrafted with Next.js.</p>
      <Button
        size={null}
        asChild
        variant='link'
        className='w-max mx-auto flex text-primary'
      >
        <a target='_blank' href='https://github.com/juancmandev/website-2.0'>
          Website Source Code
        </a>
      </Button>
    </footer>
  );
}
