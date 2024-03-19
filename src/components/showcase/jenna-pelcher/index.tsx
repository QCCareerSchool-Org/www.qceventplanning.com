import type { FC } from 'react';

import Image01 from './01.png';
import Image02 from './02.jpg';
import Image03 from './03.jpg';
import Image04 from './04.jpg';
import Image05 from './05.jpg';
import Image06 from './06.jpg';
import Image07 from './07.jpg';
import Image08 from './08.jpg';
import Image09 from './09.jpg';
import Image10 from './10.jpg';
import Image11 from './11.jpg';
import Image12 from './12.jpg';
import Image13 from './13.jpg';
import Image14 from './14.jpg';
import Image15 from './15.jpg';
import CollageImage from './collage.jpg';
import { Showcase } from '@/components/showcase';
import { JennaPelcher } from '@/components/testimonial/images';

const portfolioImages = [
  { src: Image01 },
  { src: Image02 },
  { src: Image03 },
  { src: Image04 },
  { src: Image05 },
  { src: Image06 },
  { src: Image07 },
  { src: Image08 },
  { src: Image09 },
  { src: Image10 },
  { src: Image11 },
  { src: Image12 },
  { src: Image13 },
  { src: Image14 },
  { src: Image15 },
];

export const JennaPelcherShowcase: FC = () => (
  <Showcase
    name="Jenna Pelcher"
    credentials="Event & Wedding Planning"
    showcaseImageSrc={CollageImage}
    iconImageSrc={JennaPelcher}
    description="Originally from New Jersey, Jenna went to school in New York for fashion design before making the exciting career change to event planning. In 2019, she found huge success opening up her own boutique decor business, Willa & Rose."
    portfolioImages={portfolioImages}
  />
);
