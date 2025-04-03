import type { Course, WithContext } from 'schema-dts';
import { type CourseCode, getCourseName } from '@/domain/courseCode';

const descriptions: Record<CourseCode, string> = {
  ep: '...',
  wp: '...',
  ce: '...',
  cp: '...',
  lw: '...',
  dw: '...',
  ed: '...',
  eb: 'QC\'s Accelerate Your Business course provides students with the most comprehensive training available to grow your event planning business.',
  fd: '...',
  fl: '...',
  pe: '...',
  ve: '...',
};

export const getCourseJsonLD = (courseCode: CourseCode): WithContext<Course> => {
  return {
    '@context': 'https://schema.org',
    '@type': 'Course',
    'name': getCourseName(courseCode),
    'description': descriptions[courseCode],
    'provider': {
      '@type': 'Organization',
      'name': 'QC Event School',
      'sameAs': 'https://www.qceventplanning.com',
    },
  };
};
