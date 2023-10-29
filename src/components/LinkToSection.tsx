import Link from 'next/link';

interface IProps {
  href: string;
  label: string;
}

export default function LinkToSection(props: IProps) {
  return <Link href={props.href}>{props.label}</Link>;
}
