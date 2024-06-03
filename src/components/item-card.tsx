import Link from 'next/link';
import { Calendar } from 'lucide-react';
import formatDate from '@/utils/format-date';

type Props = {
  title?: string;
  date?: string;
  type?: 'blog' | 'portfolio' | 'videos';
  description?: string;
  slug: string;
  tags?: string[];
  image?: string;
  imageCaption?: string;
  repo?: string;
  url?: string;
  author?: string;
  content?: string;
};

export default function ItemCard(props: Props) {
  return (
    <Link
      tabIndex={0}
      title={props.title}
      className='group outline-card'
      href={`/${props.type}/${props.slug}`}
    >
      <article className='h-full w-[280px] rounded-md bg-secondary shadow-xl'>
        <header className='w-[280px] overflow-hidden rounded-t-md'>
          <img
            loading='lazy'
            src={props.image || ''}
            width={640}
            height={427}
            className='-z-10 aspect-[640/427] w-full h-auto max-h-[157.48px] transition-all duration-300 group-hover:scale-110 group-focus:scale-110'
            alt={props.imageCaption || 'Image caption'}
          />
        </header>
        <main className='px-3 py-2 space-y-1.5'>
          <h3 className='line-clamp-1 text-lg font-medium group-hover:underline group-focus:underline'>
            {props.title}
          </h3>
          <h4 className='text-sm font-light flex items-center gap-1'>
            <Calendar className='w-4' />
            <span>{props.date && formatDate(new Date(props.date))}</span>
          </h4>
          <p>{props.description}</p>
        </main>
      </article>
    </Link>
  );
}
