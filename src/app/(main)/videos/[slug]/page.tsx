import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import type { FC } from 'react';

import { getVideo } from '..';
import { Player } from './player';
import { Transcript } from './transcript';
import { VideoJsonLD } from '@/components/jsonLd/videoObject';
import type { GenerateMetadata } from '@/serverComponent';

export const generateMetadata: GenerateMetadata<'/videos/[slug]'> = async ({ params }): Promise<Metadata> => {
  const p = await params;
  const video = getVideo(p.slug);

  if (!video) {
    return notFound();
  }

  return {
    title: video.title,
    description: video.description,
    alternates: { canonical: video.watch_loc },
  };
};

const VideoPlayerPage: FC<PageProps<'/videos/[slug]'>> = async ({ params }) => {
  const p = await params;
  const video = getVideo(p.slug);

  if (!video) {
    return notFound();
  }

  return (
    <>
      <VideoJsonLD {...video} />
      <section className="bg-light pt-4">
        <div className="container">
          <h1 className="mb-3">{video.title}</h1>
          <div className="ratio ratio-16x9 mb-3">
            <Player video={video} />
          </div>
          <p className="lead mb-0">{video.description}</p>
          {video.transcript && (
            <Transcript>
              {video.transcript.map((t, i) => <p key={i}>{t}</p>)}
            </Transcript>
          )}
        </div>
      </section>
    </>
  );
};

export default VideoPlayerPage;
