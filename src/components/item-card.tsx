import Link from 'next/link';
import { Calendar } from 'lucide-react';
import formatDate from '@/utils/format-date';

type Props = {
  title?: string;
  date?: string;
  type?: 'blog' | 'portfolio';
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
      title={props.title}
      tabIndex={0}
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
            className='-z-10 aspect-[640/427] h-auto max-h-[157.48px] w-full transition-all duration-300 group-hover:scale-110 group-focus:scale-110'
            alt={props.imageCaption || 'Image caption'}
          />
        </header>
        <main className='flex flex-col gap-3 p-3'>
          <section className='flex flex-col gap-1'>
            <h3 className='line-clamp-1 text-lg transition-colors group-hover:text-primary group-hover:underline group-focus:text-primary group-focus:underline'>
              {props.title}
            </h3>
            <h4 className='flex items-center gap-1.5 text-sm'>
              <Calendar className='w-5' />
              <span className='mt-0.5'>
                {props.date && formatDate(new Date(props.date))}
              </span>
            </h4>
          </section>
          <section>
            <p>{props.description}</p>
          </section>
        </main>
      </article>
    </Link>
  );
}
