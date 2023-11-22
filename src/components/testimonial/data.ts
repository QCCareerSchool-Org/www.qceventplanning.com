import type { StaticImageData } from 'next/image';

import * as Images from './images';

export type Testimonial = {
  name: string;
  quote: string[];
  image: StaticImageData;
  imagePositionX?: number;
  imagePositionY?: number;
  stars: 0 | 1 | 2 | 3 | 4 | 5;
};

export const testimonials: Record<string, Testimonial> = {
  'TE-0001': {
    name: 'Arnold Schwarzenegger',
    quote: [ 'Consider that a divorce!' ],
    image: Images.AlyssaPerna,
    stars: 1,
  },
  'TE-0002': {
    name: 'Name Surname',
    quote: [ 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.' ],
    image: Images.AlyssaPerna,
    stars: 5,
  },
};
