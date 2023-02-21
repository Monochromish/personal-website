// This component is not finished and has no props.

import * as React from 'react';

import ButtonLink from '@/components/links/ButtonLink';

export default function NavBar() {
  const [activeButton, setActiveButton] = React.useState('home');

  return (
    <div className='flex justify-center'>
      <div className='m-5 w-fit rounded '>
        <ButtonLink
          isDarkBg
          className='emerald m-1'
          onClick={() => setActiveButton('home')}
          variant={activeButton === 'home' ? 'primary' : 'outline'}
          href='/'
        >
          Home
        </ButtonLink>
        <ButtonLink
          isDarkBg
          className='emerald m-1'
          onClick={() => setActiveButton('music')}
          variant={activeButton === 'music' ? 'primary' : 'outline'}
          href='/music'
        >
          Music
        </ButtonLink>
        <ButtonLink
          isDarkBg
          className='emerald m-1'
          onClick={() => setActiveButton('contact')}
          variant={activeButton === 'contact' ? 'primary' : 'outline'}
          href='/contact'
        >
          Contact Me
        </ButtonLink>
      </div>
    </div>
  );
}
