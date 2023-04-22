import Image from 'next/image';
import ItemCardMetadataProps from '@/interfaces/ItemCardMetadata.model';
import Chip from './Chip';
import Link from 'next/link';

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
  <Link href={`/${lang}/${type}/${slug}`}>
    <article className='bg-dark1 w-[280px] h-full rounded-[8px] shadow-boxShadow cursor-pointer group'>
      <header className='w-[280px] overflow-hidden rounded-t-[8px]'>
        <Image
          priority
          src={featuredImage}
          width='0'
          height='0'
          sizes='100vw'
          className='w-full h-auto group-hover:scale-110 transition-all duration-300'
          alt={featuredImageCaption}
        />
      </header>
      <main className='p-[12px] grid gap-y-[8px]'>
        <section>
          <h3 className='text-lg transition-colors group-hover:text-primary group-hover:underline'>
            {title}
          </h3>
          <h4 className='text-sm font-normal'>
            {date.toLocaleDateString(lang === 'en' ? 'en-US' : 'es-MX')}
          </h4>
        </section>
        <section className='flex flex-wrap gap-[4px]'>
          {tags && tags.map((tag) => <Chip key={tag} tag={tag} />)}
        </section>
        <section>
          <p className='text-md font-thin'>{subtitle}</p>
        </section>
      </main>
    </article>
  </Link>
);

export default ItemCard;
