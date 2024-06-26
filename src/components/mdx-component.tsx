import cn from '@/utils/cn';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { Button } from '@/components/ui/button';
import { useMDXComponent } from 'next-contentlayer/hooks';

const CopyButton = dynamic(() => import('@/components/copy-button'));

interface IAnchor extends React.HTMLAttributes<HTMLAnchorElement> {
  href: string;
}

const components = {
  h1: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h1 {...props} />
  ),
  h2: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h2 {...props} />
  ),
  h3: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h3 {...props} />
  ),
  h4: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h4 {...props} />
  ),
  h5: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h5 {...props} />
  ),
  h6: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h6 {...props} />
  ),
  a: ({ ...props }: IAnchor | any) =>
    props.href.startsWith('/') || props.href.startsWith('#') ? (
      <Button
        asChild
        size={null}
        variant='link'
        className='m-0 p-0 text-base no-underline hover:underline'
      >
        <Link {...props} />
      </Button>
    ) : (
      <Button
        asChild
        size={null}
        variant='link'
        className='m-0 p-0 text-base text-primary no-underline hover:underline'
      >
        <a
          {...props}
          target='_blank'
          className='max-w-max text-primary outline-ring'
        />
      </Button>
    ),
  p: ({ className, ...props }: React.HTMLAttributes<HTMLParagraphElement>) => (
    <p {...props} />
  ),
  ul: ({ className, ...props }: React.HTMLAttributes<HTMLUListElement>) => (
    <ul {...props} />
  ),
  ol: ({ className, ...props }: React.HTMLAttributes<HTMLOListElement>) => (
    <ol {...props} />
  ),
  li: ({ className, ...props }: React.HTMLAttributes<HTMLLIElement>) => (
    <li {...props} />
  ),
  blockquote: ({
    className,
    ...props
  }: React.HTMLAttributes<HTMLQuoteElement>) => <blockquote {...props} />,
  img: ({
    className,
    alt,
    ...props
  }: React.ImgHTMLAttributes<HTMLImageElement>) => (
    <img
      {...props}
      loading='lazy'
      className={`${cn('rounded-md', className)}`}
      alt={alt}
    />
  ),
  hr: ({ ...props }) => <hr className='my-4 md:my-8' {...props} />,
  table: ({ className, ...props }: React.HTMLAttributes<HTMLTableElement>) => (
    <table {...props} />
  ),
  tr: ({ className, ...props }: React.HTMLAttributes<HTMLTableRowElement>) => (
    <tr {...props} />
  ),
  th: ({ className, ...props }: React.HTMLAttributes<HTMLTableCellElement>) => (
    <th {...props} />
  ),
  td: ({ className, ...props }: React.HTMLAttributes<HTMLTableCellElement>) => (
    <td {...props} />
  ),
  pre: ({
    __rawString__,
    className,
    ...props
  }: React.HTMLAttributes<HTMLPreElement> & {
    __rawString__?: string;
  }) => (
    <>
      <pre className={`m-0 p-0`} {...props} />
      {__rawString__ && <CopyButton value={__rawString__} />}
    </>
  ),
  code: ({ className, ...props }: React.HTMLAttributes<HTMLElement>) => (
    <code
      className='w-full rounded-md border border-border/20 bg-[#282c34] p-1 font-normal before:content-none after:content-none'
      {...props}
    />
  ),
};

type MdxProps = {
  code: string;
};

export default function Mdx({ code }: MdxProps) {
  const Component = useMDXComponent(code);

  return <Component components={components} />;
}
