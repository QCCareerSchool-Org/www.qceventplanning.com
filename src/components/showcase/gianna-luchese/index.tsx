import type { FC } from 'react';

import Image01 from './01.jpg';
import Image02 from './02.jpg';
import Image03 from './03.jpg';
import Image04 from './04.jpg';
import Image05 from './05.jpg';
import Image06 from './06.jpg';
import CollageImage from './collage.jpg';
import { Showcase } from '@/components/showcase';
import { GiannaLuchese } from '@/components/testimonial/images';

const portfolioImages = [
  { src: Image01 },
  { src: Image02 },
  { src: Image03 },
  { src: Image04 },
  { src: Image05 },
  { src: Image06 },
];

export const GiannaLucheseShowcase: FC = () => (
  <Showcase
    name="Gianna Luchese"
    credentials="Event & Wedding Planning"
    showcaseImageSrc={CollageImage}
    iconImageSrc={GiannaLuchese}
    description="Gianna, owner of Events by Gianna, blends her Sonoma County roots with a passion for creativity. With a background in fashion and a love for the rococo era, she crafts opulent event designs. Her journey, fueled by education and experience, promises a future of expanded offerings and community connections."
    portfolioImages={portfolioImages}
  />
);
