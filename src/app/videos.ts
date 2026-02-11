/* eslint-disable camelcase */

export interface Video {
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

// import InteriorDecoratingPreviewPoster from '@/app/(blank)/previews/interior-decorating/_sections/platform/poster.jpg';

const baseUrl = 'https://www.qceventplanning.com';

export const siteVideos: Video[] = ([
  // {
  //   slug: 'your-journey-starts-here',
  //   pages: [
  //     baseUrl,
  //     `${baseUrl}/previews/interior-decorating`,
  //     `${baseUrl}/online-courses/interior-decorating`,
  //   ],
  //   title: 'Your Journey Starts Here',
  //   thumbnail_loc: `${baseUrl}${InteriorDecoratingPreviewPoster.src}`,
  //   description: 'Unleash your creativity and shape the future of design with QC Design School. Together we can tranform your passion into a dynamic, thriving career.',
  //   content_loc: 'https://51d9ccad7be11d8ada71-aeafba698c87c1173d616904e85b2e3e.ssl.cf1.rackcdn.com/design-marketing-video.mp4',
  //   duration: 111,
  //   publication_date: new Date(2025, 7, 1, 15, 37).toISOString(),
  //   family_friendly: 'yes',
  //   requires_subscription: 'no',
  // },
] as Video[]).map(v => ({
  ...v,
  player_loc: 'player_loc' in v && v.player_loc ? v.player_loc : `${baseUrl}/videos/${v.slug}`,
}));

// check for duplicate slugs
const slugs: string[] = [];

for (const v of siteVideos) {
  if (slugs.includes(v.slug)) {
    throw Error(`duplicate slug ${v.slug}`);
  }
  slugs.push(v.slug);
}
