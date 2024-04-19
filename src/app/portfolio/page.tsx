import ItemCard from '@/components/item-card';
import { getAllContent } from '@/utils/get-content';
import { sortByKeyDesc } from '@/utils/sorts';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Portfolio',
  description: 'Check my projects.',
};

export default async function Page() {
  const portfolio = await getAllContent('portfolio');

  if (!portfolio) return null;

  sortByKeyDesc(portfolio, 'date');

  return (
    <div className='space-y-8'>
      <div className='space-y-1'>
        <h1 className='text-3xl font-bold'>Portfolio</h1>
        <p>Check my projects.</p>
      </div>
      <section>
        <ul className='flex flex-wrap gap-6'>
          {portfolio.map((portfolioItem) => (
            <li key={portfolioItem.slug}>
              <ItemCard {...portfolioItem} type='portfolio' />
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
