import { getAllContent } from '@/utils/get-content';
import { sortByKeyDesc } from '@/utils/sorts';
import { Metadata } from 'next';
import ItemCard from '@/components/item-card';

export const metadata: Metadata = {
  title: 'Videos',
  description: 'My YouTube channel videos with the scripts.',
};

export default async function VideosPage() {
  const videos = await getAllContent('videos');

  if (!videos) return null;

  sortByKeyDesc(videos, 'date');

  return (
    <>
      <h1 className='text-3xl font-bold'>Videos</h1>
      <p>
        My YouTube channel is in Spanish, that is because there are not enough
        content about the topics that I talk in Spanish, but in English are
        enough (I think).
      </p>
      <ul className='flex flex-wrap gap-6 mt-8'>
        {videos.map((video) => (
          <li key={video.slug}>
            <ItemCard {...video} type='videos' />
          </li>
        ))}
      </ul>
    </>
  );
}
