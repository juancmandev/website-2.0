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
      <article className='w-[280px] h-full rounded-md shadow-xl bg-secondary'>
        <header className='w-[280px] overflow-hidden rounded-t-md'>
          <img
            src={props.image || ''}
            width={640}
            height={427}
            className='w-full h-auto max-h-[157.48px] aspect-[640/427] -z-10 group-focus:scale-110 group-hover:scale-110 transition-all duration-300'
            alt={props.imageCaption || 'Image caption'}
          />
        </header>
        <main className='p-3 flex flex-col gap-3'>
          <section className='flex flex-col gap-1'>
            <h3 className='line-clamp-1 text-lg transition-colors group-focus:text-primary group-hover:text-primary group-hover:underline group-focus:underline'>
              {props.title}
            </h3>
            <h4 className='text-sm flex items-center gap-1.5'>
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
