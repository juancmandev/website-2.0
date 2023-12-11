import { TIcon } from '@/types';

export default function HamburgerIcon(props: TIcon) {
  return (
    <svg fill='none' viewBox='0 0 15 15' width={props.size} height={props.size}>
      <path
        fill='currentColor'
        fillRule='evenodd'
        d='M1.5 3a.5.5 0 000 1h12a.5.5 0 000-1h-12zM1 7.5a.5.5 0 01.5-.5h12a.5.5 0 010 1h-12a.5.5 0 01-.5-.5zm0 4a.5.5 0 01.5-.5h12a.5.5 0 010 1h-12a.5.5 0 01-.5-.5z'
        clipRule='evenodd'
      />
    </svg>
  );
}
