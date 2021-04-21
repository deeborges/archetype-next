import Link, { LinkProps } from 'next/link';
import { ReactElement, cloneElement } from 'react';

interface ActivedLinkProps extends LinkProps {
  children: ReactElement;
}

export function ActivedLink({ children, ...rest }: ActivedLinkProps) {
  return <Link {...rest}>{children}</Link>;
}
