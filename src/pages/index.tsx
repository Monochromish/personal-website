import Image from 'next/image';
import React, { useState } from 'react';
import {
  SiGithub,
  SiLastdotfm,
  SiMaildotru,
  SiSpotify,
  SiTwitter,
} from 'react-icons/si';

import useLanyardDetails from '@/hooks/useLanyardDetails';
import useLastFMDetails from '@/hooks/useLastFMDetails';

import Layout from '@/components/layout/Layout';
import ArrowLink from '@/components/links/ArrowLink';
import UnderlineLink from '@/components/links/UnderlineLink';
import UnstyledLink from '@/components/links/UnstyledLink';
import Seo from '@/components/Seo';
import Skeleton from '@/components/Skeleton';
import VideoPlayer from '@/components/VideoPlayer';

import { age, id } from '@/constant/env';

export default function HomePage() {
  const lanyardDetails = useLanyardDetails(id);
  const [imageLoaded, setImageLoaded] = useState(false);
  const { song } = useLastFMDetails('Monochromish');

  return (
    <Layout>
      <Seo />

      <main>
        <section className='bg-dots dark:bg-white'>
          {/* <NavBar /> */}
          {/* Unfinished */}

          <div className='layout relative flex min-h-screen flex-col items-center justify-center py-12 text-center text-white'>
            <main className='mx-auto grid max-w-3xl grid-cols-6 gap-6 px-6 pb-40 pt-16'>
              <div className='p-200 col-span-4 flex items-center justify-center overflow-hidden rounded-2xl bg-emerald-200 dark:border-emerald-500 dark:bg-emerald-500/20 dark:backdrop-blur-2xl md:col-span-4 md:h-52'>
                <div className='flex flex-col items-center space-y-4 py-8 px-6 md:flex-row md:space-y-0 md:space-x-4'>
                  <div className='relative inline-block'>
                    {!imageLoaded && (
                      <Skeleton className='absolute top-0 left-0 h-full w-full rounded-full' />
                    )}
                    <Image
                      src='https://avatars.githubusercontent.com/u/79590499?v=4'
                      placeholder='blur'
                      blurDataURL='https://avatars.githubusercontent.com/u/79590499?v=4'
                      height={96}
                      width={96}
                      className={`float h-24 w-24 rounded-full border border-emerald-500 object-cover ${
                        imageLoaded ? 'opacity-100' : 'opacity-0'
                      }`}
                      alt='baddie fr'
                      onLoad={() => setImageLoaded(true)}
                    />
                  </div>

                  <div className='space-y-1'>
                    <h1 className='font-title dark:text-glow-emerald-500/50 text-center text-xl font-bold tracking-tighter text-emerald-900 dark:text-emerald-300 md:text-left'>
                      Monochromish
                    </h1>

                    <p className='dark:text-glow-emerald-500/50 text-center text-emerald-800 dark:text-emerald-300/95 md:text-left'>
                      {age} y/o student and part-time developer
                    </p>

                    <p className='dark:text-glow-emerald-500/30 text-center text-emerald-800 dark:text-emerald-300/80 md:text-left'>
                      <ArrowLink href='mailto:monolul@outlook.com'>
                        contact me
                      </ArrowLink>
                    </p>
                  </div>
                </div>
              </div>
              <div className='col-span-2 h-full'>
                {lanyardDetails ? (
                  <>
                    <UnstyledLink
                      className='flex h-full items-center justify-center rounded-2xl bg-emerald-500 text-4xl text-white'
                      href={`https://discord.com/users/${id}`}
                    >
                      <div className='space-y-1 text-center '>
                        <h2 className='flex flex-row items-center	justify-center gap-3'>
                          <div
                            className={`h-5 w-5 rounded-full ${lanyardDetails?.statusColor}`}
                          />
                          <span>{lanyardDetails?.discord_status}</span>
                        </h2>

                        <p className='text-base'>
                          {lanyardDetails?.discord_user.username}
                          <span className='text-gray-300'>
                            #{lanyardDetails?.discord_user.discriminator}
                          </span>
                        </p>
                      </div>
                    </UnstyledLink>
                  </>
                ) : (
                  <>
                    <UnstyledLink
                      className='flex h-full items-center justify-center rounded-2xl bg-emerald-500 text-4xl text-white'
                      href={`https://discord.com/users/${id}`}
                    >
                      <div className='space-y-1 text-center '>
                        <div className='flex flex-row items-center	justify-center gap-3'>
                          <VideoPlayer
                            src='/images/connecting.webm'
                            hideControls
                            autoplay
                            loop
                            className='w-40'
                          />
                        </div>
                      </div>
                    </UnstyledLink>
                  </>
                )}
              </div>
              <div className='col-span-3 flex h-52 items-center justify-center rounded-2xl bg-emerald-500 text-4xl text-emerald-50 md:col-span-2'>
                <UnstyledLink
                  className='flex h-full items-center justify-center rounded-2xl bg-emerald-500 text-4xl text-white'
                  href='https://github.com/Monochromish'
                >
                  <SiGithub className='transition-transform hover:scale-150' />
                </UnstyledLink>
              </div>
              <div className='p-200 col-span-4 flex items-center justify-center overflow-hidden rounded-2xl bg-emerald-200 dark:border-emerald-500 dark:bg-emerald-500/20 dark:backdrop-blur-2xl md:col-span-4 md:h-52'>
                <div className='flex flex-col items-center space-y-4 py-8 px-6 md:flex-row md:space-y-0 md:space-x-4'>
                  <div className='space-y-1'>
                    <h1 className='font-title dark:text-glow-emerald-500/50 text-center text-xl font-bold tracking-tighter text-emerald-900 dark:text-emerald-300 md:text-left'>
                      About Me
                    </h1>

                    <p className='dark:text-glow-emerald-500/50 text-center text-emerald-800 dark:text-emerald-300/95 md:text-left'>
                      I am passionate about coding and love working with
                      JavaScript and TypeScript. I am currently working for{' '}
                      <UnderlineLink href='https://github.com/ciderapp'>
                        Cider Collective
                      </UnderlineLink>{' '}
                      as a Developer. I have an{' '}
                      <span className='inline-block line-through'>
                        unhealthy
                      </span>{' '}
                      obsession with music, here's{' '}
                      <UnderlineLink href='https://last.fm/user/Monochromish'>
                        my Last.fm
                      </UnderlineLink>
                      .
                    </p>
                  </div>
                </div>
              </div>
              <div className='col-span-3 grid grid-cols-2 gap-6 md:col-span-2'>
                <div className='aspect-w-1 aspect-h-1 relative flex items-center justify-center rounded-2xl bg-emerald-500 text-4xl text-emerald-50'>
                  <UnstyledLink
                    className='absolute inset-0 flex items-center justify-center rounded-2xl bg-emerald-500 text-4xl text-white transition-transform hover:scale-125'
                    href='https://twitter.com/MonochromishDev'
                  >
                    <SiTwitter />
                  </UnstyledLink>
                </div>
                <div className='aspect-w-1 aspect-h-1 relative flex items-center justify-center rounded-2xl bg-emerald-500 text-4xl text-emerald-50'>
                  <UnstyledLink
                    className='absolute inset-0 flex items-center justify-center rounded-2xl bg-emerald-500 text-4xl text-white transition-transform hover:scale-125'
                    href='https://open.spotify.com/user/r19mv8j7ffjz2qeh42rd5to6g?si=f66dd1912810493a'
                  >
                    <SiSpotify />
                  </UnstyledLink>
                </div>
                <div className='aspect-w-1 aspect-h-1 relative flex items-center justify-center rounded-2xl bg-emerald-500 text-4xl text-emerald-50'>
                  <UnstyledLink
                    className='absolute inset-0 flex items-center justify-center rounded-2xl bg-emerald-500 text-4xl text-white transition-transform hover:scale-125'
                    href='https://last.fm/user/Monochromish'
                  >
                    <SiLastdotfm />
                  </UnstyledLink>
                </div>
                <div className='aspect-w-1 aspect-h-1 relative flex items-center justify-center rounded-2xl bg-emerald-500 text-4xl text-emerald-50'>
                  <UnstyledLink
                    className='absolute inset-0 flex items-center justify-center rounded-2xl bg-emerald-500 text-4xl text-white transition-transform hover:scale-125'
                    href='mailto:monolul@outlook.com'
                  >
                    <SiMaildotru />
                  </UnstyledLink>
                </div>
              </div>
              {song ? (
                <>
                  <div className='p-200 col-span-4 flex items-center justify-start overflow-hidden rounded-2xl bg-emerald-200 dark:border-emerald-500 dark:bg-emerald-500/20 dark:backdrop-blur-2xl md:col-span-4 md:h-52'>
                    <div className='flex flex-col items-center space-y-4 py-8 px-6 md:flex-row md:space-y-0 md:space-x-4'>
                      <div className='relative inline-block'>
                        {!imageLoaded && (
                          <Skeleton className='absolute top-0 left-0 h-full w-full rounded' />
                        )}
                        <Image
                          src={song.art}
                          placeholder='blur'
                          blurDataURL={song.art}
                          height={96}
                          width={96}
                          className={`h-24 w-24 rounded border border-emerald-500 object-cover ${
                            imageLoaded ? 'opacity-100' : 'opacity-0'
                          }`}
                          alt={song.album}
                          onLoad={() => setImageLoaded(true)}
                        />
                      </div>

                      <div className='space-y-1'>
                        <h1 className='font-title dark:text-glow-emerald-500/50 text-center text-xl font-bold tracking-tighter text-emerald-900 dark:text-emerald-300 md:text-left'>
                          Currently Listening To
                        </h1>

                        <p className='dark:text-glow-emerald-500/50 text-center text-emerald-800 dark:text-emerald-300/95 md:text-left'>
                          {song.name} by {song.artist}
                        </p>

                        <p className='dark:text-glow-emerald-500/30 text-center text-emerald-800 dark:text-emerald-300/80 md:text-left'>
                          <ArrowLink href={song.url}>listen along</ArrowLink>
                        </p>
                      </div>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div className='p-200 col-span-4 flex items-center justify-center overflow-hidden rounded-2xl bg-emerald-200 dark:border-emerald-500 dark:bg-emerald-500/20 dark:backdrop-blur-2xl md:col-span-4 md:h-52'>
                    <div className='flex flex-col items-center space-y-4 py-8 px-6 md:flex-row md:space-y-0 md:space-x-4'>
                      <div className='space-y-1'>
                        <h1 className='font-title dark:text-glow-emerald-500/50 text-center text-xl font-bold tracking-tighter text-emerald-900 dark:text-emerald-300 md:text-left'>
                          Not listening to anything
                        </h1>
                        <p className='dark:text-glow-emerald-500/30 text-center text-emerald-800 dark:text-emerald-300/80 md:text-left'>
                          feel free to listen to{' '}
                          <UnderlineLink href='https://open.spotify.com/user/r19mv8j7ffjz2qeh42rd5to6g/playlists'>
                            my playlists
                          </UnderlineLink>{' '}
                          tho
                        </p>
                      </div>
                    </div>
                  </div>
                </>
              )}
            </main>
            <footer className='absolute bottom-2 text-white'>
              © {new Date().getFullYear()} By{' '}
              <UnderlineLink href='https://github.com/Monochromish'>
                Monochromish
              </UnderlineLink>
            </footer>
          </div>
        </section>
      </main>
    </Layout>
  );
}
