interface IconProps {
  fillColor?: string | '#eee';
}

export const HamburgerIcon = (props: IconProps) => (
  <svg
    width='32'
    height='20'
    viewBox='0 0 32 20'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'>
    <rect y='16' width='32' height='4' rx='2' fill={props.fillColor} />
    <rect y='8' width='32' height='4' rx='2' fill={props.fillColor} />
    <rect width='32' height='4' rx='2' fill={props.fillColor} />
  </svg>
);

export const CloseIcon = (props: IconProps) => (
  <svg
    width='26'
    height='26'
    viewBox='0 0 26 26'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'>
    <rect
      y='22.6274'
      width='32'
      height='4'
      rx='2'
      transform='rotate(-45 0 22.6274)'
      fill={props.fillColor}
    />
    <rect
      x='2.82843'
      width='32'
      height='4'
      rx='2'
      transform='rotate(45 2.82843 0)'
      fill={props.fillColor}
    />
  </svg>
);
