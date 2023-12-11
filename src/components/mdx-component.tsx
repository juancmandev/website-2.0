import Image from 'next/image';
import { useMDXComponent } from 'next-contentlayer/hooks';
import cn from '@/utils/cn';
import { PostData, LinkToSection, CodeBlock } from '@/components';
import { TCodeBlock } from '@/types';

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
  a: ({ className, ...props }: React.HTMLAttributes<HTMLAnchorElement>) => (
    <a
      {...props}
      target='_blank'
      className='transition-colors text-primary underline hover:text-primaryLight focus:text-primaryLight'
    />
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
    // eslint-disable-next-line @next/next/no-img-element
    <img
      {...props}
      width={300}
      height={250}
      className={`w-full h-auto ${cn('rounded-sm', className)}`}
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
  pre: ({ className, ...props }: React.HTMLAttributes<HTMLPreElement>) => (
    <pre {...props} />
  ),
  code: ({ className, ...props }: React.HTMLAttributes<HTMLElement>) => (
    <code {...props} />
  ),
  PostData: ({ date, author }: { date: string; author: string }) => (
    <PostData date={date} author={author} />
  ),
  LinkToSection: ({ href, label }: { href: string; label: string }) => (
    <LinkToSection href={href} label={label} />
  ),
  CodeBlock: (props: TCodeBlock) => <CodeBlock {...props} />,
  Image,
};

interface MdxProps {
  code: string;
}

export default function Mdx({ code }: MdxProps) {
  const Component = useMDXComponent(code);

  return (
    <article className='prose prose-invert mx-auto'>
      <Component components={components} />
    </article>
  );
}
