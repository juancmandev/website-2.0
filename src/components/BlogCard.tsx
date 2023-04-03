import Image from 'next/image';
import PostMetadataProps from '@/interfaces/PostMetadata.model';
import Chip from './Chip';
import Link from 'next/link';

const BlogCard = ({
  featuredImage,
  title,
  date,
  tags,
  subtitle,
  slug,
}: PostMetadataProps) => (
  <Link href={`/blog/${slug}`}>
    <article className='bg-dark1 w-[280px] h-full rounded-[8px] shadow-boxShadow cursor-pointer group'>
      <header>
        <Image
          priority
          src={featuredImage}
          style={{ borderRadius: '8px 8px 0 0' }}
          width={280}
          height={50}
          alt='Metroid Dread image example'
        />
      </header>
      <main className='p-[12px] grid gap-y-[8px]'>
        <section>
          <h3 className='text-lg transition-colors group-hover:text-primary group-hover:underline'>
            {title}
          </h3>
          <h4 className='text-sm font-normal'>
            {date.toLocaleDateString('en-US')}
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

export default BlogCard;
