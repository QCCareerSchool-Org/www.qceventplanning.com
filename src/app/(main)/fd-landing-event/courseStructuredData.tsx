import type { FC } from 'react';
import type { Course, WithContext } from 'schema-dts';

import { getCourseDescription, getCourseName, getCourseUrl } from '@/domain/courseCode';
import type { CourseCode } from '@/domain/courseCode';

import type { PriceQuery } from '@/lib/fetch';
import { fetchPrice } from '@/lib/fetch';

type Props = {
  courseCode: CourseCode;
};

export const CourseStructuredData: FC<Props> = async ({ courseCode }) => {
  const priceQuery: PriceQuery = { countryCode: 'US', provinceCode: 'MD', courses: [ courseCode ] };
  const price = await fetchPrice(priceQuery);
  if (!price) {
    return null;
  }

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(getCourseJsonLD(courseCode, price.cost)) }} />;
};

const getCourseJsonLD = (courseCode: CourseCode, price: number): WithContext<Course> => ({
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
