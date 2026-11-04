import type { Metadata } from 'next';
import Link from 'next/link';
import type { FC } from 'react';

import { siteVideos } from '@/videos';

export const metadata: Metadata = {
  title: 'Videos',
  description: 'A list of QC Design School\'s videos',
  alternates: { canonical: '/videos' },
};

const VideosIndexPage: FC<PageProps<'/videos'>> = () => {
  return (
    <section>
      <div className="container">
        <h1 className="mb-3">Videos</h1>
        {siteVideos.map(s => <p key={s.slug}><Link href={s.watch_loc}>{s.title}</Link></p>)}
      </div>
    </section>
  );
};

export default VideosIndexPage;
