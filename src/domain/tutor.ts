import type { StaticImageData } from 'next/image';

export interface Tutor {
  name: string;
  subHeading?: string;
  text: string;
  src: StaticImageData;
  website?: string;
  profiles?: string[];
}
