import { NextJSIcon, ReactJSIcon } from '@/assets/Icons';

interface ChipProps {
  tag: string;
}

const tags: any = {
  ['React.js']: {
    label: 'React.js',
    icon: <ReactJSIcon />,
    backgroundColor: '#00befb',
    borderColor: '#61dafb',
  },
  ['Next.js']: {
    label: 'Next.js',
    icon: <NextJSIcon />,
    backgroundColor: '#000',
    borderColor: '#fff',
  },
};

const Chip = ({ tag }: ChipProps) => (
  <div
    style={{
      backgroundColor: tags[tag].backgroundColor,
      borderColor: tags[tag].borderColor,
    }}
    className={`flex items-center gap-[2px] rounded-[20px] px-[6px] py-[2px] border-[1px]`}>
    <div className='grid place-items-center w-[20px] h-[20px] p-[1px] bg-white1 rounded-full'>
      {tags[tag].icon}
    </div>
    <span className='text-base'>{tags[tag].label}</span>
  </div>
);

export default Chip;
