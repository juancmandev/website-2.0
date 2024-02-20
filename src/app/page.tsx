import ItemCard from '@/components/item-card';
import { getAllContent } from '@/utils/get-content';
import { sortByKeyDesc } from '@/utils/sorts';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'juancmandev',
  description:
    'Welcome to my website, here I share my projects and things that I think.',
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
        <h2 className='text-4xl'>{`Hello, I'm Juan Manzanero`}</h2>
        <h1 className='text-primary text-4xl font-bold'>Web Developer</h1>
        <p className='text-lg'>
          Welcome to my website, here I share my projects and things that I
          think.
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
      </section>
    </div>
  );
}
