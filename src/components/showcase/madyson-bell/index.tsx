import type { FC } from 'react';

import Image01 from './01.png';
import Image02 from './02.png';
import Image03 from './03.png';
import Image04 from './04.png';
import Image05 from './05.png';
import Image06 from './06.png';
import CollageImage from './collage.jpg';
import { Showcase } from '@/components/showcase';
import { MadysonBell } from '@/components/testimonial/images';

const portfolioImages = [
  { src: Image01 },
  { src: Image02 },
  { src: Image03 },
  { src: Image04 },
  { src: Image05 },
  { src: Image06 },
];

export const MadysonBellShowcase: FC = () => (
  <Showcase
    name="Madyson Bell"
    credentials="Event & Wedding Planning"
    showcaseImageSrc={CollageImage}
    iconImageSrc={MadysonBell}
    description="Mady, a Whitewater, Kansas native, ventured into event planning after her own wedding. With a knack for personalized touches, she founded Mady Bell Events in Wichita. Her romantic style and creativity shine, making dreams come true for clients. A QC Event School graduate, she's poised for success and continual growth."
    portfolioImages={portfolioImages}
  />
);
