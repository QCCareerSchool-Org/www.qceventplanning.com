import type { Course, WithContext } from 'schema-dts';
import type { CourseCode } from '@/domain/courseCode';

type CourseData = {
  name: string;
  description: string;
};

const courses: Record<CourseCode, CourseData> = {
  ep: {
    name: 'Event & Wedding Planning',
    description: '...',
  },
  wp: {
    name: 'Wedding Planning',
    description: '...',
  },
  ce: {
    name: 'Event Planning',
    description: '...',
  },
  cp: {
    name: 'Corporate Event Planning',
    description: '...',
  },
  lw: {
    name: 'Luxury Wedding Planning',
    description: '...',
  },
  dw: {
    name: 'Destination Wedding Planning',
    description: '...',
  },
  ed: {
    name: 'Event Decor',
    description: '...',
  },
  eb: {
    name: 'Accelerate Your Business',
    description: 'QC\'s Accelerate Your Business course provides students with the most comprehensive training available to grow your event planning business.',
  },
  fd: {
    name: 'Floral Design',
    description: '...',
  },
  fl: {
    name: 'Festivals and Live Events',
    description: '...',
  },
  pe: {
    name: 'Promotional Event Planning',
    description: '...',
  },
  ve: {
    name: 'Virtual Event Planning',
    description: '...',
  },
};

export const getCourseJsonLD = (courseCode: CourseCode): WithContext<Course> => {
  return {
    '@context': 'https://schema.org',
    '@type': 'Course',
    ...courses[courseCode],
    'provider': {
      '@type': 'Organization',
      'name': 'QC Event School',
      'sameAs': 'https://www.qceventplanning.com',
    },
  };
};
