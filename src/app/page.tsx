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

  sortByKeyDesc(blogs!, 'date');
  const last3Blogs = blogs && blogs.slice(0, 3);

  const projects = await getAllContent('portfolio');
  sortByKeyDesc(projects!, 'date');
  const last3Projects = projects && projects.slice(0, 3);

  return (
    <div className='flex flex-col gap-20'>
      <section className='flex flex-col gap-1'>
        <h1 className='text-primary text-4xl font-bold'>
          Welcome to my domain, stranger.
        </h1>
        <h2 className='text-xl'>
          I am <span className='text-primary font-semibold'>juancmandev</span>,
          web developer.
        </h2>
        <p className='text-lg'>
          Here you will find side projects, blog posts, or other related content
          about my hobbies.
        </p>
        <p className='text-lg'>
          Take a seat, drink some tea, and enjoy your stay.
        </p>
      </section>

      <section>
        <h2 className='text-3xl text-primary'>Latest posts</h2>
        <ul className='max-w-max mt-8 flex flex-col lg:flex-row gap-6'>
          {last3Blogs &&
            last3Blogs.map((blog) => (
              <li key={blog.slug}>
                <ItemCard {...blog} type='blog' />
              </li>
            ))}
        </ul>
        <Button asChild className='mt-5'>
          <Link href='/blog'>More posts</Link>
        </Button>
      </section>

      <section>
        <h2 className='text-3xl text-primary'>Latest projects</h2>
        <ul className='max-w-max mt-8 flex flex-col lg:flex-row gap-6'>
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
        <Button asChild className='mt-5'>
          <Link href='/portfolio'>More projects</Link>
        </Button>
      </section>
    </div>
  );
}
