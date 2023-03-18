import { useRouter } from 'next/router';
import * as React from 'react';
import * as IoIcons from 'react-icons/io5';

import ButtonLink from '@/components/links/ButtonLink';

interface AppRoute {
  name: string;
  path: string;
  icon: keyof typeof IoIcons;
}

const NAV_LINKS: AppRoute[] = [
  {
    name: 'Home',
    path: '/',
    icon: 'IoHome',
  },
  {
    name: 'Albums',
    path: '/albums',
    icon: 'IoAlbums',
  },
];

export default function NavBar() {
  const router = useRouter();
  const currentPath = router.asPath;

  const isActiveLink = (path: string) => currentPath === path;

  return (
    <div className='flex justify-center'>
      <div className='m-5 w-fit rounded'>
        {NAV_LINKS.map(({ name, path, icon }) => {
          const Icon = IoIcons[icon];
          return (
            <ButtonLink
              key={path}
              isDarkBg
              className='emerald m-1'
              variant={isActiveLink(path) ? 'primary' : 'outline'}
              href={path}
            >
              <Icon className='mr-2 inline-block' />
              {name}
            </ButtonLink>
          );
        })}
      </div>
    </div>
  );
}
