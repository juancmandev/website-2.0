'use client';

import { NextJSIcon, ReactJSIcon } from '@/assets/Icons';
import { useEffect, useState, ReactElement } from 'react';

interface ChipProps {
  tag: string;
}

interface TagProps {
  label: string;
  icon: ReactElement;
  backgroundColor: string;
  borderColor: string;
}

const tags: TagProps[] = [
  {
    label: 'React.js',
    icon: <ReactJSIcon />,
    backgroundColor: '#00befb',
    borderColor: '#61dafb',
  },
  {
    label: 'Next.js',
    icon: <NextJSIcon />,
    backgroundColor: '#000',
    borderColor: '#fff',
  },
];

const Chip = ({ tag }: ChipProps) => {
  const [tagData, setTagData] = useState<TagProps>(tags[0]);

  const getTagData = () => {
    const findTagData = tags.find((tagElement) => tagElement.label === tag);

    findTagData && setTagData(findTagData);
  };

  useEffect(() => {
    if (tag) getTagData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tag]);

  return (
    <div
      style={{
        backgroundColor: tagData.backgroundColor,
        borderColor: tagData.borderColor,
      }}
      className={`flex items-center gap-[2px] rounded-[20px] px-[6px] py-[2px] border-[1px]`}>
      <div className='grid place-items-center w-[20px] h-[20px] p-[1px] bg-white1 rounded-full'>
        {tagData.icon}
      </div>
      <span className='text-base'>{tagData.label}</span>
    </div>
  );
};

export default Chip;
