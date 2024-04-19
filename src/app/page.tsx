import ItemCard from '@/components/item-card';
import { Button } from '@/components/ui/button';
import { getAllContent } from '@/utils/get-content';
import { sortByKeyDesc } from '@/utils/sorts';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'juancmandev',
  description: `Welcome to my domain, stranger. I'm juancmandev, web Developer. Here you will find side projects, blog posts, or other related content
    about my hobbies. Take a seat, drink some tea, and enjoy your stay.`,
};

export default async function Page() {
  const blogs = await getAllContent('blog');
  const projects = await getAllContent('portfolio');

  sortByKeyDesc(blogs!, 'date');
  const last3Blogs = blogs && blogs.slice(0, 4);

  sortByKeyDesc(projects!, 'date');
  const last3Projects = projects && projects.slice(0, 4);

  return (
    <div className='space-y-16'>
      <section className='flex flex-col md:flex-row items-start gap-5 justify-between'>
        <div className='space-y-1'>
          <h1 className='text-4xl font-bold text-primary'>
            Welcome to my domain, stranger.
          </h1>
          <h2 className='text-xl'>
            I am <span className='font-semibold text-primary'>juancmandev</span>
            .
          </h2>
          <p className='text-lg'>
            I like computers, and all stuff related to technology.
          </p>
          <p className='text-lg'>
            Take a seat, drink some tea, and enjoy your stay.
          </p>
        </div>

        <img
          src='/logo.png'
          alt='juancmandev logo'
          className='w-40 h-40 aspect-square'
        />
      </section>

      <section>
        <h2 className='text-3xl'>Latest posts</h2>
        <ul className='w-full mt-4 flex flex-wrap justify-between gap-6'>
          {last3Blogs &&
            last3Blogs.map((blog) => (
              <li key={blog.slug}>
                <ItemCard {...blog} type='blog' />
              </li>
            ))}
        </ul>
        <Button asChild variant='secondary' className='mt-4'>
          <Link href='/blog'>More posts</Link>
        </Button>
      </section>

      <section>
        <h2 className='text-3xl'>Latest projects</h2>
        <ul className='w-full mt-4 flex flex-wrap justify-between gap-6'>
          {last3Projects && last3Projects.length > 0 ? (
            last3Projects.map((project) => (
              <li key={project.slug}>
                <ItemCard {...project} type='portfolio' />
              </li>
            ))
          ) : (
            <p className='font-thin'>No projects found</p>
          )}
        </ul>
        <Button asChild variant='secondary' className='mt-4'>
          <Link href='/portfolio'>More projects</Link>
        </Button>
      </section>
    </div>
  );
}
