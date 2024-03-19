import type { FC } from 'react';

import Image1 from './1.jpg';
import Image2 from './2.jpg';
import Image3 from './3.jpg';
import Image4 from './4.jpg';
import Image5 from './5.jpg';
import CollageImage from './collage.jpg';
import { Showcase } from '@/components/showcase';
import { CherelleJoseph } from '@/components/testimonial/images';

const portfolioImages = [
  { src: Image1 },
  { src: Image2 },
  { src: Image3 },
  { src: Image4 },
  { src: Image5 },
];

export const CherelleJosephShowcase: FC = () => (
  <Showcase
    name="Charelle Joseph"
    credentials="Event & Wedding Planning"
    showcaseImageSrc={CollageImage}
    iconImageSrc={CherelleJoseph}
    description="Cherelle launched her own wedding planning business in 2016 and hasn't looked back! From luxury destination weddings to bespoke ceremonies in her hometown of East London, she's mastered the in-demand industrial aesthetic her clients are looking for."
    portfolioImages={portfolioImages}
  />
);
