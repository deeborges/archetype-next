import Link, { LinkProps } from 'next/link';
import { useRouter } from 'next/dist/client/router';
import { ReactElement, cloneElement } from 'react';

interface ActivedLinkProps extends LinkProps {
  children: ReactElement;
  activeClass: string;
}

export function ActivedLink({
  children,
  activeClass,
  ...rest
}: ActivedLinkProps) {
  const { asPath } = useRouter();

  const className = asPath === rest.href ? activeClass : '';
  return (
    <Link {...rest}>
      {cloneElement(children, {
        className
      })}
    </Link>
  );
}
