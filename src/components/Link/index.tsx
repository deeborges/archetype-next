import { Content } from './styles';
import Link from 'next/link';

export interface AnchorProps {
  href: string;
  name: string;
}

export default function Anchor({ href, name }: AnchorProps) {
  return (
    <Link prefetch href={href} passHref>
      <Content href="">{name}</Content>
    </Link>
  );
}
