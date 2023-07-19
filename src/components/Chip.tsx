import { tags } from '@/utils/tags';

interface ChipProps {
  tag: string;
}

const Chip = ({ tag }: ChipProps) => (
  <div
    style={{
      backgroundColor: tags[tag].backgroundColor,
      borderColor: tags[tag].borderColor,
      color: tags[tag]?.textColor,
    }}
    className={`flex items-center gap-[2px] rounded-[20px] px-1 py-[2px] border-[1px]`}>
    <div className='grid place-items-center w-4 h-4 p-[1px] bg-white1 rounded-full'>
      {tags[tag].icon}
    </div>
    <span className='text-sm'>{tags[tag].label}</span>
  </div>
);

export default Chip;
