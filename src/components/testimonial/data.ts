import type { StaticImageData } from 'next/image';

import * as Images from './images';

export type Testimonial = {
  name: string;
  title?: string;
  quote: string[];
  image: StaticImageData;
  imagePositionX?: number;
  imagePositionY?: number;
  stars: 0 | 1 | 2 | 3 | 4 | 5;
};

export const testimonials: Record<string, Testimonial> = {
  'TE-9001': {
    name: 'Arnold Schwarzenegger',
    title: 'Graduate title',
    quote: [ 'Consider that a divorce!' ],
    image: Images.AlyssaPerna,
    stars: 1,
  },
  'TE-9002': {
    name: 'Arnold Schwarzenegger',
    title: 'Graduate title',
    quote: [ 'You\'re a funny guy Sully. I like you. That\'s why I\'m going to kill you last.' ],
    image: Images.AlyssaPerna,
    stars: 2,
  },
  'TE-0001': {
    name: 'Name Surname',
    title: 'Graduate title',
    quote: [ 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.' ],
    image: Images.AlyssaPerna,
    stars: 5,
  },
  'TE-0002': {
    name: 'Name Surname',
    title: 'Graduate title',
    quote: [ 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.' ],
    image: Images.AlyssaPerna,
    stars: 5,
  },
  'TE-0003': {
    name: 'Name Surname',
    title: 'Graduate title',
    quote: [ 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.' ],
    image: Images.AlyssaPerna,
    stars: 5,
  },
  'TE-0004': {
    name: 'Name Surname',
    title: 'Graduate title',
    quote: [ 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.' ],
    image: Images.AlyssaPerna,
    stars: 3,
  },
  'TE-0005': {
    name: 'Name Surname',
    title: 'Graduate title',
    quote: [ 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.' ],
    image: Images.AlyssaPerna,
    stars: 4,
  },
  'TE-0006': {
    name: 'Name Surname',
    title: 'Graduate title',
    quote: [ 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.' ],
    image: Images.AlyssaPerna,
    stars: 5,
  },
};
