import Image from 'next/image';
import type { FC } from 'react';

import HeroLgImage from './hero-large.jpg';
import HeroSmImage from './hero-small.jpg';

export const HomeHeroImage: FC = () => (
  <>
    <Image src={HeroLgImage} alt="" priority fill placeholder="blur" className="d-none d-md-block" style={{ objectFit: 'cover', objectPosition: '50% 50%' }} />
    <Image src={HeroSmImage} alt="" priority fill placeholder="blur" className="d-md-none" style={{ objectFit: 'cover' }} />
  </>
);
