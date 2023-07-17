import Image from 'next/image';
import ItemCardMetadataProps from '@/interfaces/ItemCardMetadata.model';
import Chip from './Chip';
import Link from 'next/link';
import months from '@/utils/months';

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
    className='group outline-none'
    href={`/${lang}/${type}/${slug}`}>
    <article className='bg-dark1 w-[280px] h-full rounded-[8px] shadow-boxShadow'>
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
      <main className='p-3 flex flex-col gap-2'>
        <section>
          <h3 className='text-lg transition-colors group-focus:text-primary group-hover:text-primary group-hover:underline group-focus:underline'>
            {title}
          </h3>
          <h4 className='text-sm font-normal'>
            {lang && (
              <span>
                {months(lang, date.getMonth())} {date.getDate()},{' '}
                {date.getFullYear()}
              </span>
            )}
          </h4>
        </section>
        <section className='flex flex-wrap gap-1'>
          {tags && tags.map((tag) => <Chip key={tag} tag={tag} />)}
        </section>
        <section>
          <p className='font-thin'>{subtitle}</p>
        </section>
      </main>
    </article>
  </Link>
);

export default ItemCard;
