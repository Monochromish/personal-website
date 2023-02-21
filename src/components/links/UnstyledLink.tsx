import Link, { LinkProps } from 'next/link';
import * as React from 'react';
import useSound from 'use-sound';

import clsxm from '@/lib/clsxm';

import boopSfx from '../../../public/audio/boop.mp3';

export type UnstyledLinkProps = {
  href: string;
  children: React.ReactNode;
  openNewTab?: boolean;
  className?: string;
  nextLinkProps?: Omit<LinkProps, 'href'>;
} & React.ComponentPropsWithRef<'a'>;

type NewTabLinkProps = {
  href: string;
  children: React.ReactNode;
} & React.ComponentPropsWithRef<'a'>;

const NewTabLink = ({ href, children, ...rest }: NewTabLinkProps) => {
  const [play] = useSound(boopSfx);

  const handleClick = () => {
    play();
    window.open(href, '_blank');
  };

  return (
    <a
      target='_blank'
      rel='noopener noreferrer'
      className={clsxm('cursor-newtab', rest.className)}
      onClick={handleClick}
      style={{ cursor: `url('/images/new-tab.png') 10 10, pointer` }}
      {...rest}
    >
      {children}
    </a>
  );
};

const UnstyledLink = React.forwardRef<HTMLAnchorElement, UnstyledLinkProps>(
  ({ children, href, openNewTab, className, nextLinkProps, ...rest }, ref) => {
    const isNewTab =
      openNewTab !== undefined
        ? openNewTab
        : href && !href.startsWith('/') && !href.startsWith('#');

    if (!isNewTab) {
      return (
        <Link
          href={href}
          ref={ref}
          className={className}
          {...rest}
          {...nextLinkProps}
        >
          {children}
        </Link>
      );
    }

    return (
      <NewTabLink href={href} className={className} {...rest}>
        {children}
      </NewTabLink>
    );
  }
);

export default UnstyledLink;
