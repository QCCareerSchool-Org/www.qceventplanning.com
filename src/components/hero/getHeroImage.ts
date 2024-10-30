import type { StaticImageData } from 'next/image';

import EB from '../../app/(main)/online-event-courses/accelerate-your-business/hero.jpg';
import CP from '../../app/(main)/online-event-courses/corporate-event-planning/hero.jpg';
import DW from '../../app/(main)/online-event-courses/destination-wedding-planning/hero.jpg';
import CE from '../../app/(main)/online-event-courses/event-and-wedding-planning/hero.jpg';
import ED from '../../app/(main)/online-event-courses/event-decor/hero.jpg';
import EP from '../../app/(main)/online-event-courses/event-planning/hero.jpg';
import FL from '../../app/(main)/online-event-courses/festivals-and-live-events/hero.jpg';
import FD from '../../app/(main)/online-event-courses/floral-design/hero.jpg';
import LW from '../../app/(main)/online-event-courses/luxury-wedding-and-event-planning/hero.jpg';
import PE from '../../app/(main)/online-event-courses/promotional-event-planning/hero.jpg';
import WP from '../../app/(main)/online-event-courses/wedding-planning/hero.jpg';
import type { CourseCode } from '@/domain/courseCode';

export const getHeroImage = (courseCode: CourseCode): StaticImageData | null => {
  switch (courseCode) {
    case 'ep':
      return EP;
    case 'ce':
      return CE;
    case 'wp':
      return WP;
    case 'cp':
      return CP;
    case 'ed':
      return ED;
    case 'lw':
      return LW;
    case 'dw':
      return DW;
    case 'fd':
      return FD;
    case 'eb':
      return EB;
    case 'fl':
      return FL;
    case 'pe':
      return PE;
    default:
      return null;
  }
};
