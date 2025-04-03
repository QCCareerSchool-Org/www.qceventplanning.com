import type { Course, WithContext } from 'schema-dts';

import type { CourseCode } from '@/domain/courseCode';
import { getCourseDescription, getCourseName } from '@/domain/courseCode';

export const getCourseJsonLD = (courseCode: CourseCode): WithContext<Course> => ({
  '@context': 'https://schema.org',
  '@type': 'Course',
  'name': getCourseName(courseCode),
  'description': getCourseDescription(courseCode),
  'provider': {
    '@type': 'Organization',
    'name': 'QC Event School',
    'sameAs': 'https://www.qceventplanning.com',
  },
});
