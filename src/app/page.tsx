import BlogCard from '@/components/BlogCard';
import BlogCardProps from '@/interfaces/BlogCard.model';

const blogCards: BlogCardProps[] = [
  {
    image: '/metroid_dread.jpg',
    title: 'Metroid Dread',
    date: 'September 8, 2021',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta vitae illo cum libero unde porro, quia pariatur architecto ex blanditiis earum tempora nesciunt quam! At.',
  },
];

const Home = () => {
  return (
    <div className='grid gap-y-[100px]'>
      <section className='grid gap-y-[4px]'>
        <h2 className='text-3xl'>{`Hi, I'm Juan`}</h2>
        <h1 className='text-4xl text-primary'>Frontend Engineer</h1>
        <p className='font-thin text-lg'>
          This is my web site, here I share my career as a{' '}
          <span className='font-normal text-primary'>Frontend</span> and{' '}
          <span className='font-normal text-primary'>Cloud</span> engineer.
        </p>
      </section>

      <section>
        <h1 className='text-3xl'>Latest Posts</h1>
        <p className='font-thin text-lg'>
          The best way to demostrate that you learnt something, is sharing it.
        </p>
        <p className='font-thin text-lg'>
          {`Here're my latest posts, feel free to read, I'll be happy if you found something that could help you in your career.`}
        </p>
        <ul className='mt-[32px]'>
          {blogCards.map((blogCard: BlogCardProps) => (
            <li key={blogCard.title}>
              <BlogCard {...blogCard} />
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default Home;
