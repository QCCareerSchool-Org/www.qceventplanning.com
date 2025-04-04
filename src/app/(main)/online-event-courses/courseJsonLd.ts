import type { Course, WithContext } from 'schema-dts';

import type { CourseCode } from '@/domain/courseCode';
import { getCourseDescription, getCourseName, getCourseUrl } from '@/domain/courseCode';

export const getCourseJsonLD = (courseCode: CourseCode, price: number): WithContext<Course> => ({
  '@context': 'https://schema.org',
  '@type': 'Course',
  '@id': `https://www.qceventplanning.com/courses/#${courseCode}`,
  'url': getCourseUrl(courseCode),
  'name': getCourseName(courseCode),
  'description': getCourseDescription(courseCode),
  'provider': {
    '@type': 'EducationalOrganization',
    '@id': 'https://www.qceventplanning.com/#school',
    'url': 'https://www.qceventplanning.com',
    'name': 'QC Event School',
  },
  'offers': [ {
    '@type': 'Offer',
    'category': 'Paid',
    'priceCurrency': 'USD',
    'price': price.toFixed(2),
  } ],
  'hasCourseInstance': [ {
    '@type': 'CourseInstance',
    'courseMode': 'Online',
    'courseWorkload': 'PT40H',
  } ],
});
