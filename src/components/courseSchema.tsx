import type { FC } from 'react';
import type { Course, WithContext } from 'schema-dts';

import { getCourseCertificate, getCourseDescription, getCourseName, getCourseUrl } from '@/domain/courseCode';
import type { CourseCode } from '@/domain/courseCode';

import type { PriceQuery } from '@/lib/fetch';
import { fetchPrice } from '@/lib/fetch';

type Props = {
  courseCode: CourseCode;
};

export const CourseSchema: FC<Props> = async ({ courseCode }) => {
  const priceQuery: PriceQuery = { countryCode: 'US', provinceCode: 'MD', courses: [ courseCode ] };
  const price = await fetchPrice(priceQuery);
  if (!price) {
    return null;
  }

  const courseJsonLD: WithContext<Course> = {
    '@context': 'https://schema.org',
    '@type': 'Course',
    '@id': `https://www.qceventplanning.com/courses/#${courseCode}`,
    'url': getCourseUrl(courseCode),
    'name': getCourseName(courseCode),
    'description': getCourseDescription(courseCode),
    'educationalCredentialAwarded': getCourseCertificate(courseCode) ?? undefined,
    'provider': {
      '@type': 'EducationalOrganization',
      '@id': 'https://www.qceventplanning.com/#school',
      'url': 'https://www.qceventplanning.com',
      'name': 'QC Event School',
      'sameAs': [
        'https://www.linkedin.com/company/qc-career-school',
        'https://www.facebook.com/QCEventPlanning',
        'https://www.instagram.com/qceventschool',
        'https://www.youtube.com/@QCEvent',
      ],
    },
    'hasCourseInstance': {
      '@type': 'CourseInstance',
      'courseMode': 'Online',
      'courseWorkload': 'PT40H',
      'offers': {
        '@type': 'Offer',
        'category': 'Course',
        'url': 'https://enroll.qceventplanning.com/',
        'priceCurrency': 'USD',
        'price': price.discountedCost.toFixed(2),
      },
    },
  };

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(courseJsonLD) }} />;
};
