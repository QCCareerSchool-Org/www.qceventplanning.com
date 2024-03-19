import type { FC } from 'react';

import Image01 from './01.png';
import Image02 from './02.png';
import Image03 from './03.png';
import Image04 from './04.png';
import Image05 from './05.png';
import Image06 from './06.png';
import CollageImage from './collage.jpg';
import { Showcase } from '@/components/showcase';
import { TazmanBaker } from '@/components/testimonial/images';

const portfolioImages = [
  { src: Image01 },
  { src: Image02 },
  { src: Image03 },
  { src: Image04 },
  { src: Image05 },
  { src: Image06 },
];

export const TazmanBakerShowcase: FC = () => (
  <Showcase
    name="Tazman Baker"
    credentials="Event & Wedding Planning"
    showcaseImageSrc={CollageImage}
    iconImageSrc={TazmanBaker}
    description="Tazman's event planning journey began with her own wedding, sparking a passion for creating memorable experiences. Enrolling in courses amidst impending motherhood, she later launched WhiteFoxx Events, armed with QC Event School certifications, to offer personalized experiences and leave a mark on her local event scene."
    portfolioImages={portfolioImages}
  />
);
