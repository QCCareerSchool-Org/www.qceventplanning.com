import type { StaticImageData } from 'next/image';

import type { CourseCode } from './courseCode';

export interface Tutor {
  name: string;
  subHeading?: string;
  text: string;
  src: StaticImageData;
  website?: string;
  profiles?: string[];
  courses: CourseCode[];
}
