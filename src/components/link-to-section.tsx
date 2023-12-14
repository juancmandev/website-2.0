import Link from 'next/link';
import { type } from 'os';

type TLinkToSection = {
  href: string;
  label: string;
};

export default function LinkToSection(props: TLinkToSection) {
  return <Link href={props.href}>{props.label}</Link>;
}
