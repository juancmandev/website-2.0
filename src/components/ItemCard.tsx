import Image from 'next/image';
import ItemCardMetadataProps from '@/interfaces/ItemCardMetadata.model';
import Link from 'next/link';
import months from '@/utils/months';
import { DateIcon } from '@/assets/Icons';

const ItemCard = ({
  featuredImage,
  featuredImageCaption,
  title,
  date,
  tags,
  subtitle,
  slug,
  lang,
  type,
}: ItemCardMetadataProps) => (
  <Link
    tabIndex={0}
    className='group outline-none shadow-boxShadow'
    href={`/${lang}/${type}/${slug}`}>
    <article className='bg-dark1 w-[280px] h-full rounded-[8px] shadow-md shadow-boxShadow'>
      <header className='w-[280px] overflow-hidden rounded-t-[8px]'>
        <Image
          priority
          src={featuredImage}
          width='0'
          height='0'
          sizes='100vw'
          className='w-full h-auto max-h-[157.49px] -z-10 group-focus:scale-110 group-hover:scale-110 transition-all duration-300'
          alt={featuredImageCaption}
        />
      </header>
      <main className='p-3 flex flex-col gap-3'>
        <section className='flex flex-col gap-1'>
          <h3 className='text-lg transition-colors group-focus:text-primary group-hover:text-primary group-hover:underline group-focus:underline'>
            {title}
          </h3>
          <h4 className='text-sm font-light flex items-center gap-[6px]'>
            <DateIcon size='0.875rem' />
            {lang === 'en' ? (
              <span className='mt-[2px]'>
                {months(lang, new Date(date).getMonth())}{' '}
                {new Date(date).getDate()}, {new Date(date).getFullYear()}
              </span>
            ) : (
              <span className='mt-[2px]'>
                {new Date(date).getDate()} de{' '}
                {months(lang, new Date(date).getMonth())} del{' '}
                {new Date(date).getFullYear()}
              </span>
            )}
          </h4>
        </section>
        <section>
          <p className='font-thin'>{subtitle}</p>
        </section>
      </main>
    </article>
  </Link>
);

export default ItemCard;
