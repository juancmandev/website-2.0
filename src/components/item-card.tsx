import Image from 'next/image';
import { TItemCard } from '@/types';
import Link from 'next/link';
import months from '@/utils/months';
import { DateIcon } from '@/assets/Icons';
import { formatDate } from '@/utils/formatDate';

export default function ItemCard(props: TItemCard) {
  return (
    <Link
      title={props.title}
      tabIndex={0}
      className='group outline-none shadow-boxShadow'
      href={`/${props.lang}/${props.type}/${props.slug}`}
    >
      <article className='bg-dark1 w-[280px] h-full rounded-sm shadow-md shadow-boxShadow'>
        <header className='w-[280px] overflow-hidden rounded-t-[4px]'>
          <Image
            priority
            src={props.image || ''}
            width='0'
            height='0'
            sizes='100vw'
            className='w-full h-auto max-h-[157.49px] -z-10 group-focus:scale-110 group-hover:scale-110 transition-all duration-300'
            alt={props.imageCaption || 'Image caption'}
          />
        </header>
        <main className='p-3 flex flex-col gap-3'>
          <section className='flex flex-col gap-1'>
            <h3 className='line-clamp-1 text-lg transition-colors group-focus:text-primary group-hover:text-primary group-hover:underline group-focus:underline'>
              {props.title}
            </h3>
            <h4 className='text-sm font-light flex items-center gap-[6px]'>
              <DateIcon size='0.875rem' />
              {props.lang === 'en' ? (
                <span className='mt-[2px]'>
                  {months(props.lang, new Date(props.date || '').getMonth())}{' '}
                  {new Date(props.date || '').getDate()},{' '}
                  {new Date(props.date || '').getFullYear()}
                </span>
              ) : (
                <span className='mt-[2px]'>
                  {formatDate(props.date!, props.lang as 'en' | 'es')}
                </span>
              )}
            </h4>
          </section>
          <section>
            <p className='font-thin'>{props.description}</p>
          </section>
        </main>
      </article>
    </Link>
  );
}
