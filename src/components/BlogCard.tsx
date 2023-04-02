import Image from 'next/image';
import BlogCardProps from '@/interfaces/BlogCard.model';
import Chip from './Chip';

const tags: string[] = ['React.js', 'Next.js'];

const BlogCard = ({ image, title, date, description }: BlogCardProps) => {
  return (
    <article className='bg-dark1 w-[280px] h-full rounded-[8px] shadow-boxShadow cursor-pointer'>
      <header>
        <Image
          priority
          src={image}
          style={{ borderRadius: '8px 8px 0 0' }}
          width={280}
          height={50}
          alt='Metroid Dread image example'
        />
      </header>
      <main className='px-[12px] py-[16px] grid gap-y-[8px]'>
        <section>
          <h3 className='text-lg'>{title}</h3>
          <h4 className='text-sm font-normal'>{date}</h4>
        </section>
        <section className='flex flex-wrap gap-[4px]'>
          {tags.map((tag) => (
            <Chip key={tag} tag={tag} />
          ))}
        </section>
        <section>
          <p className='text-md font-thin'>{description}</p>
        </section>
      </main>
    </article>
  );
};

export default BlogCard;
