import { IconProps } from '@/interfaces';

export default function RSSIcon(props: IconProps) {
  return (
    <svg
      fill='none'
      stroke='currentColor'
      strokeLinecap='round'
      strokeLinejoin='round'
      viewBox='0 0 24 24'
      strokeWidth={2}
      width={props.size}
      height={props.size}>
      <path d='M4 11a9 9 0 019 9M4 4a16 16 0 0116 16' />
      <path d='M6 19 A1 1 0 0 1 5 20 A1 1 0 0 1 4 19 A1 1 0 0 1 6 19 z' />
    </svg>
  );
}
