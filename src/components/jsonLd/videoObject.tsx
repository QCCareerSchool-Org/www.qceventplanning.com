import type { FC } from 'react';
import type { VideoObject, WithContext } from 'schema-dts';

interface Props {
  /** unique identifier */
  slug: string;
  /** the pages this video appears on */
  pages: string[];
  title: string;
  thumbnail_loc: string;
  description: string;
  /** Direct URL to the video file */
  content_loc: string;
  /** URL to the player page (leave undefined for default) */
  player_loc: string;
  /** Duration in seconds */
  duration: number;
  expiration_date?: string | Date;
  rating?: number;
  view_count?: number;
  publication_date: string | Date;
  family_friendly: 'yes' | 'no';
  restriction?: {
    relationship: 'allow' | 'deny';
    content: string;
  };
  requires_subscription: 'yes' | 'no';
  uploader?: {
    info?: string | undefined;
    content?: string | undefined;
  };
  live?: 'yes' | 'no';
  tag?: string;
}

export const VideoJsonLD: FC<Props> = props => {
  const jsonLd = getVideo(props);

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />;
};

export const getVideo = (props: Props): WithContext<VideoObject> => ({
  '@context': 'https://schema.org',
  '@id': `#${props.slug}`,
  '@type': 'VideoObject',
  'name': props.title,
  'description': props.description,
  'thumbnailUrl': props.thumbnail_loc,
  'uploadDate': typeof props.publication_date === 'string' ? props.publication_date : props.publication_date.toISOString(),
  'duration': ISODuration(props.duration),
  'contentUrl': props.content_loc,
  'embedUrl': props.player_loc,
});

const ISODuration = (totalSeconds: number): string => {
  const seconds = Math.floor(totalSeconds % 60);
  const minutes = Math.floor((totalSeconds / 60) % 60);
  const hours = Math.floor(totalSeconds / 3600);

  return `PT${hours}H${minutes}M${seconds}S`;
};
