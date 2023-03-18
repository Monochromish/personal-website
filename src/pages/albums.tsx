import React, { useEffect, useState } from 'react';

import Layout from '@/components/layout/Layout';
import UnderlineLink from '@/components/links/UnderlineLink';
import NavBar from '@/components/NavBar';
import NextImage from '@/components/NextImage';
import Seo from '@/components/Seo';

interface AlbumShowcaseProps {
  imageFiles: string[];
}

function AlbumShowcase({ imageFiles }: AlbumShowcaseProps): JSX.Element {
  return (
    <>
      {imageFiles.map((filename: string) => (
        <NextImage
          key={filename}
          src={`/images/Albums/${filename}`}
          alt={filename.replace('.jpeg', '')}
          width={256}
          height={256}
          useSkeleton
          priority
          imgClassName='rounded border border-emerald-500 object-cover'
        />
      ))}
    </>
  );
}

export default function AlbumsPage(): JSX.Element {
  const [imageFiles, setImageFiles] = useState<string[]>([]);

  useEffect(() => {
    async function fetchImageFiles(): Promise<void> {
      const response = await fetch('/api/getImageFiles');
      const { filenames } = await response.json();
      setImageFiles(filenames);
    }

    fetchImageFiles();
  }, []);

  return (
    <Layout>
      <Seo />

      <main>
        <section className='bg-dots'>
          <div className='layout relative flex min-h-screen flex-col items-center justify-center text-center text-white'>
            <NavBar />
            <main className='album-container mx-auto max-w-6xl gap-6 pb-40'>
              <AlbumShowcase imageFiles={imageFiles} />
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
